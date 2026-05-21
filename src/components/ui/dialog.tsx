import {
  ComponentProps,
  createContext,
  MouseEvent,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { createPortal } from "react-dom";
import XIcon from "lucide-react/dist/esm/icons/x";

import { cn } from "@/lib/utils";

type DialogContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const DialogContext = createContext<DialogContextValue | null>(null);

function useDialogContext() {
  const context = useContext(DialogContext);

  if (!context) {
    throw new Error("Dialog components must be used within <Dialog>");
  }

  return context;
}

function Dialog({
  open,
  defaultOpen = false,
  onOpenChange,
  children,
}: {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: ReactNode;
}) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isControlled = open !== undefined;
  const resolvedOpen = isControlled ? open : internalOpen;

  const setOpen = (nextOpen: boolean) => {
    if (!isControlled) {
      setInternalOpen(nextOpen);
    }

    onOpenChange?.(nextOpen);
  };

  const value = useMemo(
    () => ({ open: resolvedOpen, setOpen }),
    [resolvedOpen],
  );

  return (
    <DialogContext.Provider value={value}>{children}</DialogContext.Provider>
  );
}

function DialogTrigger({
  children,
  onClick,
  ...props
}: ComponentProps<"button">) {
  const { setOpen } = useDialogContext();

  return (
    <button
      data-slot="dialog-trigger"
      type="button"
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) {
          setOpen(true);
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
}

function DialogPortal({ children }: { children: ReactNode }) {
  if (typeof document === "undefined") {
    return null;
  }

  return createPortal(children, document.body);
}

function DialogOverlay({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-overlay"
      className={cn("absolute inset-0 bg-black/60", className)}
      {...props}
    />
  );
}

function DialogClose({
  children,
  onClick,
  ...props
}: ComponentProps<"button">) {
  const { setOpen } = useDialogContext();

  return (
    <button
      data-slot="dialog-close"
      type="button"
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) {
          setOpen(false);
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
}

function DialogContent({
  className,
  children,
  ...props
}: ComponentProps<"div">) {
  const { open, setOpen } = useDialogContext();

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open]);

  if (!open) {
    return null;
  }

  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setOpen(false);
    }
  };

  return (
    <DialogPortal>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onMouseDown={handleBackdropClick}
      >
        <DialogOverlay />
        <div
          data-slot="dialog-content"
          role="dialog"
          aria-modal="true"
          aria-describedby={undefined}
          className={cn(
            "bg-background relative z-10 grid w-full max-w-[calc(100%-2rem)] gap-4 rounded-lg border p-6 shadow-lg sm:max-w-lg",
            className,
          )}
          {...props}
        >
          {children}
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="ring-offset-background focus:ring-ring absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-offset-2"
          >
            <XIcon className="size-4" />
            <span className="sr-only">Close</span>
          </button>
        </div>
      </div>
    </DialogPortal>
  );
}

function DialogHeader({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  );
}

function DialogFooter({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className,
      )}
      {...props}
    />
  );
}

function DialogTitle({ className, ...props }: ComponentProps<"h2">) {
  return (
    <h2
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...props}
    />
  );
}

function DialogDescription({
  className,
  ...props
}: ComponentProps<"p">) {
  return (
    <p
      data-slot="dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
