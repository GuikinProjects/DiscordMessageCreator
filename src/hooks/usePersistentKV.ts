import { useCallback, useEffect, useRef, useState } from "react";

type PersistentKVReturn<T> = [
	T | undefined,
	(value: T | ((prev: T | undefined) => T | undefined)) => void,
	() => void,
];

function readLocalStorageValue<T>(
	storageKey: string,
	fallback: T,
): T | undefined {
	if (typeof window === "undefined") {
		return fallback;
	}

	const raw = window.localStorage.getItem(storageKey);
	if (raw === null) {
		return fallback;
	}

	try {
		return JSON.parse(raw) as T;
	} catch {
		return fallback;
	}
}

function useLocalStorageKV<T>(
	key: string,
	initialValue: T,
): PersistentKVReturn<T> {
	const storageKey = `discord-message-creator:${key}`;
	const initialRef = useRef(initialValue);
	const initialFallback = initialRef.current;

	const [value, setValue] = useState<T | undefined>(() =>
		readLocalStorageValue(storageKey, initialFallback),
	);

	useEffect(() => {
		setValue(readLocalStorageValue(storageKey, initialFallback));
	}, [storageKey, initialFallback]);

	useEffect(() => {
		if (typeof window === "undefined") return;

		const handleStorage = (event: StorageEvent) => {
			if (event.key !== storageKey) return;
			if (event.newValue === null) {
				setValue(undefined);
				return;
			}

			try {
				setValue(JSON.parse(event.newValue));
			} catch {
				setValue(initialFallback);
			}
		};

		window.addEventListener("storage", handleStorage);
		return () => window.removeEventListener("storage", handleStorage);
	}, [storageKey, initialFallback]);

	const persistValue = useCallback(
		(next: T | undefined) => {
			if (typeof window === "undefined") return;
			if (next === undefined) {
				window.localStorage.removeItem(storageKey);
				return;
			}
			window.localStorage.setItem(storageKey, JSON.stringify(next));
		},
		[storageKey],
	);

	const setPersistentValue = useCallback(
		(nextValue: T | ((prev: T | undefined) => T | undefined)) => {
			setValue((current) => {
				const resolved =
					typeof nextValue === "function"
						? (nextValue as (prev: T | undefined) => T | undefined)(
								current,
							)
						: nextValue;
				persistValue(resolved);
				return resolved;
			});
		},
		[persistValue],
	);

	const deleteValue = useCallback(() => {
		persistValue(undefined);
		setValue(undefined);
	}, [persistValue]);

	return [value, setPersistentValue, deleteValue];
}

/**
 * Persistent state hook backed by localStorage.
 */
export function usePersistentKV<T>(
	key: string,
	initialValue: T,
): PersistentKVReturn<T> {
	return useLocalStorageKV<T>(key, initialValue);
}
