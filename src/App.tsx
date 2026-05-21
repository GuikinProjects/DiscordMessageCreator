import { lazy, Suspense, useState, useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { ElementsSidebar } from "@/components/ElementsSidebar";
import { MessageDropZone } from "@/components/MessageDropZone";
import { Message, Author, MessageBlock, MessageBlockType } from "@/lib/types";
import { toast } from "sonner";
import { usePersistentKV } from "@/hooks/usePersistentKV";

// Migration utility to convert legacy timestamp fields to new format
function migrateAuthor(author: Author): Author {
  // If already using new format, return as is
  if (author.showDate !== undefined || author.showTime !== undefined) {
    return author;
  }

  // If using legacy format, convert it
  if (author.showTimestamp) {
    const migrated = { ...author };
    migrated.showDate = true;
    migrated.showTime = true;

    // Convert datetime-local to separate date and time
    if (author.customTimestamp) {
      try {
        const date = new Date(author.customTimestamp);
        if (!Number.isNaN(date.getTime())) {
          const year = date.getFullYear();
          const month = String(date.getMonth() + 1).padStart(2, "0");
          const day = String(date.getDate()).padStart(2, "0");
          const hours = String(date.getHours()).padStart(2, "0");
          const minutes = String(date.getMinutes()).padStart(2, "0");

          migrated.customDate = `${year}-${month}-${day}`;
          migrated.customTime = `${hours}:${minutes}`;
        }
      } catch {
        // If parsing fails, just enable both without custom values
      }
    }

    // Clean up legacy fields
    delete migrated.showTimestamp;
    delete migrated.customTimestamp;

    return migrated;
  }

  return author;
}

function migrateMessageBlock(block: MessageBlock): MessageBlock {
  // If already using new format, return as is
  if (block.data.showDate !== undefined || block.data.showTime !== undefined) {
    return block;
  }

  // If using legacy format, convert it
  if (block.data.showTimestamp) {
    const migrated = { ...block };
    migrated.data = { ...block.data };
    migrated.data.showDate = true;
    migrated.data.showTime = true;

    // Convert datetime-local to separate date and time
    if (block.data.customTimestamp) {
      try {
        const date = new Date(block.data.customTimestamp);
        if (!Number.isNaN(date.getTime())) {
          const year = date.getFullYear();
          const month = String(date.getMonth() + 1).padStart(2, "0");
          const day = String(date.getDate()).padStart(2, "0");
          const hours = String(date.getHours()).padStart(2, "0");
          const minutes = String(date.getMinutes()).padStart(2, "0");

          migrated.data.customDate = `${year}-${month}-${day}`;
          migrated.data.customTime = `${hours}:${minutes}`;
        }
      } catch {
        // If parsing fails, just enable both without custom values
      }
    }

    // Clean up legacy fields
    delete migrated.data.showTimestamp;
    delete migrated.data.customTimestamp;

    return migrated;
  }

  return block;
}

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

  // Migrate legacy data on mount
  useEffect(() => {
    // Migrate authors
    if (authors && authors.length > 0) {
      const needsMigration = authors.some(
        (a) =>
          a.showTimestamp !== undefined &&
          a.showDate === undefined &&
          a.showTime === undefined,
      );

      if (needsMigration) {
        const migratedAuthors = authors.map(migrateAuthor);
        setAuthors(migratedAuthors);
      }
    }

    // Migrate current blocks
    if (currentBlocks && currentBlocks.length > 0) {
      const needsMigration = currentBlocks.some(
        (b) =>
          b.data.showTimestamp !== undefined &&
          b.data.showDate === undefined &&
          b.data.showTime === undefined,
      );

      if (needsMigration) {
        const migratedBlocks = currentBlocks.map(migrateMessageBlock);
        setCurrentBlocks(migratedBlocks);
      }
    }
  }, [authors, currentBlocks, setAuthors, setCurrentBlocks]);
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
        return currentAuthors.map((a) => (a.id === author.id ? author : a));
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
    setMessages((current) => (current || []).filter((m) => m.authorId !== id));
  };

  const handleOpenAuthorDialog = () => {
    setEditingAuthor(undefined);
    setAuthorDialogOpen(true);
  };

  const handleAddBlock = (type: MessageBlockType) => {
    const newBlock: MessageBlock = {
      id: Date.now().toString(),
      type,
      data: {},
    };

    setCurrentBlocks((current) => [...(current || []), newBlock]);

    // Show feedback
    const blockLabels = {
      author: "Author",
      message: "Message",
      embed: "Embed",
      image: "Image",
    };
    toast.success(`${blockLabels[type]} block added!`);
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
          !currentAuthors.some((existing) => existing.id === newAuthor.id),
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
    <div className="min-h-screen bg-[#36393f] text-white md:flex md:flex-row">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[-8%] h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-[8%] top-[12%] h-72 w-72 rounded-full bg-indigo-500/12 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[28%] h-96 w-96 rounded-full bg-sky-400/8 blur-3xl" />
      </div>

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
        onAddBlock={handleAddBlock}
      />

      <div
        className={`relative flex-1 transition-all duration-300 ${sidebarCollapsed ? "md:ml-14" : "md:ml-80"} ml-0`}
      >
        <div className="mx-auto max-w-[1800px] px-3 py-4 md:px-6 md:py-8">
          <div className="mb-4 flex flex-wrap gap-2 md:mb-8">
            <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 shadow-[0_20px_80px_rgba(0,0,0,0.18)] backdrop-blur">
              <div className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                Authors
              </div>
              <div className="mt-1 text-2xl font-semibold text-white">
                {authors?.length || 0}
              </div>
            </div>
            <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 shadow-[0_20px_80px_rgba(0,0,0,0.18)] backdrop-blur">
              <div className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                Blocks
              </div>
              <div className="mt-1 text-2xl font-semibold text-white">
                {currentBlocks?.length || 0}
              </div>
            </div>
            <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 shadow-[0_20px_80px_rgba(0,0,0,0.18)] backdrop-blur">
              <div className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                Saved
              </div>
              <div className="mt-1 text-2xl font-semibold text-white">
                {messages?.length || 0}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:gap-8 xl:grid-cols-[minmax(0,1.15fr)_minmax(380px,560px)]">
            <div className="min-w-0">
              <MessageDropZone
                blocks={currentBlocks || []}
                authors={authors || []}
                onBlocksChange={setCurrentBlocks}
                onOpenAuthorDialog={handleOpenAuthorDialog}
              />
            </div>

            <div className="min-w-0">
              <Suspense
                fallback={
                  <div className="h-64 rounded-[28px] border border-white/8 bg-[#2a2c35]" />
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
