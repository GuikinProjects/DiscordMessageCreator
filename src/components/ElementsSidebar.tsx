import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { DraggableItem } from '@/components/DraggableItem'
import { AuthorsPanel } from '@/components/AuthorsPanel'
import { MessagesPanel } from '@/components/MessagesPanel'
import { ExportPanel } from '@/components/ExportPanel'
import { Author, Message } from '@/lib/types'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'

interface ElementsSidebarProps {
  authors: Author[]
  messages: Message[]
  collapsed: boolean
  onCollapsedChange: (collapsed: boolean) => void
  onAddAuthor: () => void
  onEditAuthor: (author: Author) => void
  onDeleteAuthor: (id: string) => void
  onDeleteMessage: (id: string) => void
  onClearAllMessages: () => void
  onImportData: (data: { messages: Message[], authors: Author[] }) => void
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
}: ElementsSidebarProps) {
  if (collapsed) {
    return (
      <div className="fixed left-0 top-0 h-full bg-[#2f3136] border-r border-[#202225] z-10">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onCollapsedChange(false)}
          className="m-2 text-gray-400 hover:text-white"
        >
          <CaretRight size={20} />
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed left-0 top-0 h-full w-80 bg-[#2f3136] border-r border-[#202225] z-10 flex flex-col">
      <div className="p-4 flex items-center justify-between border-b border-[#202225]">
        <h2 className="text-lg font-semibold text-white">Elements</h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onCollapsedChange(true)}
          className="text-gray-400 hover:text-white"
        >
          <CaretLeft size={20} />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div>
          <h3 className="text-sm font-medium mb-3 text-gray-400">DRAG TO ADD</h3>
          <div className="space-y-2">
            <DraggableItem type="author" label="Author" />
            <DraggableItem type="message" label="Message" />
            <DraggableItem type="embed" label="Embed" />
            <DraggableItem type="image" label="Image" />
          </div>
        </div>

        <Separator className="bg-[#202225]" />

        <div>
          <Tabs defaultValue="authors" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="authors">Authors</TabsTrigger>
              <TabsTrigger value="export">Export</TabsTrigger>
            </TabsList>
            <TabsContent value="authors">
              <AuthorsPanel
                authors={authors}
                onAddAuthor={onAddAuthor}
                onEditAuthor={onEditAuthor}
                onDeleteAuthor={onDeleteAuthor}
              />
            </TabsContent>
            <TabsContent value="export">
              <ExportPanel
                messages={messages}
                authors={authors}
                onImport={onImportData}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
