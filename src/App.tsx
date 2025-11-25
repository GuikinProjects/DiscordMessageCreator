import { lazy, Suspense, useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { ElementsSidebar } from "@/components/ElementsSidebar";
import { MessageDropZone } from "@/components/MessageDropZone";
import { Message, Author, MessageBlock } from "@/lib/types";
import { toast } from "sonner";
import { usePersistentKV } from "@/hooks/usePersistentKV";

const ComposedMessagePreview = lazy(() =>
	import("@/components/ComposedMessagePreview").then((module) => ({
		default: module.ComposedMessagePreview,
	})),
);
const AuthorDialog = lazy(() =>
	import("@/components/AuthorDialog").then((module) => ({
		default: module.AuthorDialog,
	})),
);

function App() {
	const [messages, setMessages] = usePersistentKV<Message[]>(
		"discord-messages",
		[],
	);
	const [authors, setAuthors] = usePersistentKV<Author[]>(
		"discord-authors",
		[],
	);
	const [currentBlocks, setCurrentBlocks] = usePersistentKV<MessageBlock[]>(
		"discord-current-blocks",
		[],
	);
	const [authorDialogOpen, setAuthorDialogOpen] = useState(false);
	const [editingAuthor, setEditingAuthor] = useState<Author | undefined>(
		undefined,
	);
	const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

	const handleAddMessage = (message: Message) => {
		setMessages((current) => [...(current || []), message]);
	};

	const handleDeleteMessage = (id: string) => {
		setMessages((current) => (current || []).filter((m) => m.id !== id));
	};

	const handleClearAllMessages = () => {
		setMessages([]);
	};

	const handleSaveAuthor = (author: Author) => {
		setAuthors((current) => {
			const currentAuthors = current || [];
			const existing = currentAuthors.find((a) => a.id === author.id);
			if (existing) {
				return currentAuthors.map((a) =>
					a.id === author.id ? author : a,
				);
			}
			return [...currentAuthors, author];
		});
		setEditingAuthor(undefined);
	};

	const handleEditAuthor = (author: Author) => {
		setEditingAuthor(author);
		setAuthorDialogOpen(true);
	};

	const handleDeleteAuthor = (id: string) => {
		setAuthors((current) => (current || []).filter((a) => a.id !== id));
		setMessages((current) =>
			(current || []).filter((m) => m.authorId !== id),
		);
	};

	const handleOpenAuthorDialog = () => {
		setEditingAuthor(undefined);
		setAuthorDialogOpen(true);
	};

	const handleImportData = (data: {
		messages: Message[];
		authors: Author[];
	}) => {
		// Merge imported authors, avoiding duplicates by ID
		setAuthors((current) => {
			const currentAuthors = current || [];
			const newAuthors = data.authors.filter(
				(newAuthor) =>
					!currentAuthors.some(
						(existing) => existing.id === newAuthor.id,
					),
			);
			return [...currentAuthors, ...newAuthors];
		});

		// Merge imported messages
		setMessages((current) => {
			const currentMessages = current || [];
			return [...currentMessages, ...data.messages];
		});
	};

	const handleSaveComposedMessage = () => {
		const blocks = currentBlocks || [];
		const authorBlocks = blocks.filter((b) => b.type === "author");

		if (authorBlocks.length === 0) {
			toast.error("Please add at least one author to your message");
			return;
		}

		const groupedMessages: Array<{
			authorId: string;
			blocks: MessageBlock[];
		}> = [];

		let currentAuthorId: string | null = null;
		let currentGroupBlocks: MessageBlock[] = [];

		for (const block of blocks) {
			if (block.type === "author") {
				if (currentAuthorId && currentGroupBlocks.length > 0) {
					groupedMessages.push({
						authorId: currentAuthorId,
						blocks: currentGroupBlocks,
					});
					currentGroupBlocks = [];
				}
				currentAuthorId = block.data.authorId || null;
			} else if (currentAuthorId) {
				currentGroupBlocks.push(block);
			}
		}

		if (currentAuthorId && currentGroupBlocks.length > 0) {
			groupedMessages.push({
				authorId: currentAuthorId,
				blocks: currentGroupBlocks,
			});
		}

		if (groupedMessages.length === 0) {
			toast.error("Please add message content after your author(s)");
			return;
		}

		const newMessages: Message[] = groupedMessages.map((group) => {
			const messageContent = group.blocks
				.filter((b) => b.type === "message" && b.data.content)
				.map((b) => b.data.content)
				.join("\n\n");

			const embedBlock = group.blocks.find(
				(b) => b.type === "embed" && b.data.embed,
			);
			const imageBlocks = group.blocks.filter(
				(b) => b.type === "image" && b.data.imageUrl,
			);

			return {
				id: `${Date.now()}-${Math.random()}`,
				authorId: group.authorId,
				content: messageContent || "",
				timestamp: new Date(),
				embed: embedBlock?.data.embed,
				attachments: imageBlocks.map((b) => b.data.imageUrl!),
			};
		});

		setMessages((current) => [...(current || []), ...newMessages]);
		setCurrentBlocks([]);

		const count = newMessages.length;
		toast.success(`${count} message${count > 1 ? "s" : ""} saved!`);
	};

	return (
		<div className="min-h-screen bg-[#36393f] flex">
			<ElementsSidebar
				authors={authors || []}
				messages={messages || []}
				collapsed={sidebarCollapsed}
				onCollapsedChange={setSidebarCollapsed}
				onAddAuthor={handleOpenAuthorDialog}
				onEditAuthor={handleEditAuthor}
				onDeleteAuthor={handleDeleteAuthor}
				onDeleteMessage={handleDeleteMessage}
				onClearAllMessages={handleClearAllMessages}
				onImportData={handleImportData}
			/>

			<div
				className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? "ml-14" : "ml-80"}`}
			>
				<div className="max-w-[1800px] mx-auto px-6 py-8">
					<div className="grid grid-cols-1 lg:grid-cols-[1fr_600px] gap-8">
						<div>
							<MessageDropZone
								blocks={currentBlocks || []}
								authors={authors || []}
								onBlocksChange={setCurrentBlocks}
								onOpenAuthorDialog={handleOpenAuthorDialog}
							/>
						</div>

						<div>
							<Suspense
								fallback={
									<div className="h-64 rounded-lg bg-[#2f3136]" />
								}
							>
								<ComposedMessagePreview
									blocks={currentBlocks || []}
									authors={authors || []}
								/>
							</Suspense>
						</div>
					</div>
				</div>
			</div>

			<Suspense fallback={null}>
				<AuthorDialog
					open={authorDialogOpen}
					onOpenChange={setAuthorDialogOpen}
					onSave={handleSaveAuthor}
					editingAuthor={editingAuthor}
				/>
			</Suspense>

			<Toaster />
		</div>
	);
}

export default App;
