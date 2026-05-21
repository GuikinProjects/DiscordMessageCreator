import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DraggableItem } from "@/components/DraggableItem";
import { AuthorsPanel } from "@/components/AuthorsPanel";
import { MessagesPanel } from "@/components/MessagesPanel";
import { ExportPanel } from "@/components/ExportPanel";
import { Author, Message, MessageBlockType } from "@/lib/types";
import { CaretLeft, CaretRight, List } from "@phosphor-icons/react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface ElementsSidebarProps {
  authors: Author[];
  messages: Message[];
  collapsed: boolean;
  onCollapsedChange: (collapsed: boolean) => void;
  onAddAuthor: () => void;
  onEditAuthor: (author: Author) => void;
  onDeleteAuthor: (id: string) => void;
  onDeleteMessage: (id: string) => void;
  onClearAllMessages: () => void;
  onImportData: (data: { messages: Message[]; authors: Author[] }) => void;
  onAddBlock?: (type: MessageBlockType) => void;
}

export function ElementsSidebar({
  authors,
  messages,
  collapsed,
  onCollapsedChange,
  onAddAuthor,
  onEditAuthor,
  onDeleteAuthor,
  onDeleteMessage,
  onClearAllMessages,
  onImportData,
  onAddBlock,
}: ElementsSidebarProps) {
  const isMobile = useIsMobile();

  const sidebarContent = (
    <>
      <div className="flex-1 overflow-y-auto p-4 space-y-5">
        <div className="rounded-[24px] border border-white/8 bg-black/15 p-4">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            {isMobile ? "TAP TO ADD" : "DRAG TO ADD"}
          </h3>
          <div className="space-y-2">
            <DraggableItem type="author" label="Author" onAdd={onAddBlock} />
            <DraggableItem type="message" label="Message" onAdd={onAddBlock} />
            <DraggableItem type="embed" label="Embed" onAdd={onAddBlock} />
            <DraggableItem type="image" label="Image" onAdd={onAddBlock} />
          </div>
        </div>

        <Separator className="bg-white/6" />

        <div className="rounded-[24px] border border-white/8 bg-black/15 p-3">
          <Tabs defaultValue="authors" className="w-full">
            <TabsList className="grid w-full grid-cols-2 rounded-2xl bg-white/5 p-1">
              <TabsTrigger value="authors">Authors</TabsTrigger>
              <TabsTrigger value="export">Export</TabsTrigger>
            </TabsList>
            <TabsContent value="authors" className="mt-3">
              <AuthorsPanel
                authors={authors}
                onAddAuthor={onAddAuthor}
                onEditAuthor={onEditAuthor}
                onDeleteAuthor={onDeleteAuthor}
              />
            </TabsContent>
            <TabsContent value="export" className="mt-3">
              <ExportPanel
                messages={messages}
                authors={authors}
                onImport={onImportData}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );

  // Mobile: Use Sheet (drawer)
  if (isMobile) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="fixed left-4 top-4 z-50 border border-white/10 bg-[#20232d]/90 text-gray-300 shadow-lg backdrop-blur hover:bg-[#2d3340] hover:text-white"
          >
            <List size={24} weight="bold" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-80 border-r border-white/8 bg-[#1f222c] p-0"
        >
          <SheetHeader className="border-b border-white/8 p-4">
            <SheetTitle className="text-lg font-semibold text-white">
              Elements
            </SheetTitle>
          </SheetHeader>
          {sidebarContent}
        </SheetContent>
      </Sheet>
    );
  }

  // Desktop: Fixed sidebar
  if (collapsed) {
    return (
      <div className="fixed left-0 top-0 z-10 h-full border-r border-white/8 bg-[#1f222c]/95 backdrop-blur">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onCollapsedChange(false)}
          className="m-2 text-gray-400 hover:bg-white/5 hover:text-white"
        >
          <CaretRight size={20} />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed left-0 top-0 z-10 flex h-full w-80 flex-col border-r border-white/8 bg-[#1f222c]/95 backdrop-blur-xl">
      <div className="flex items-center justify-between border-b border-white/8 p-4">
        <h2 className="text-lg font-semibold text-white">Elements</h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onCollapsedChange(true)}
          className="text-gray-400 hover:bg-white/5 hover:text-white"
        >
          <CaretLeft size={20} />
        </Button>
      </div>

      {sidebarContent}
    </div>
  );
}
