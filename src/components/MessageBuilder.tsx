import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { MessageDropZone } from '@/components/MessageDropZone'
import { ComposedMessagePreview } from '@/components/ComposedMessagePreview'
import { MessageBlock, Author } from '@/lib/types'
import { FloppyDisk, SplitVertical, Eye } from '@phosphor-icons/react'
import { toast } from 'sonner'

interface MessageBuilderProps {
  blocks: MessageBlock[]
  authors: Author[]
  onBlocksChange: (blocks: MessageBlock[]) => void
  onOpenAuthorDialog: () => void
  onSaveMessage: () => void
  sidebarCollapsed: boolean
}

export function MessageBuilder({
  blocks,
  authors,
  onBlocksChange,
  onOpenAuthorDialog,
  onSaveMessage,
  sidebarCollapsed,
}: MessageBuilderProps) {
  const [showSplit, setShowSplit] = useState(false)

  return (
    <div className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? 'ml-14' : 'ml-80'}`}>
      <div className="container mx-auto p-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-1">Discord Message Creator</h1>
            <p className="text-muted-foreground">
              Drag elements from the sidebar to build your Discord message
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setShowSplit(!showSplit)}
              title={showSplit ? "Single view" : "Split view"}
            >
              {showSplit ? <Eye size={20} /> : <SplitVertical size={20} />}
            </Button>
            {blocks.length > 0 && (
              <Button onClick={onSaveMessage} className="gap-2">
                <FloppyDisk size={20} />
                Save Message
              </Button>
            )}
          </div>
        </div>

        {showSplit ? (
          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Build</h2>
              <MessageDropZone
                blocks={blocks}
                authors={authors}
                onBlocksChange={onBlocksChange}
                onOpenAuthorDialog={onOpenAuthorDialog}
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Preview</h2>
              <Card className="bg-[#36393f] border-none">
                <ComposedMessagePreview blocks={blocks} authors={authors} />
              </Card>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <MessageDropZone
              blocks={blocks}
              authors={authors}
              onBlocksChange={onBlocksChange}
              onOpenAuthorDialog={onOpenAuthorDialog}
            />
            {blocks.length > 0 && (
              <>
                <Separator className="my-8" />
                <div>
                  <h2 className="text-xl font-semibold mb-4">Preview</h2>
                  <Card className="bg-[#36393f] border-none">
                    <ComposedMessagePreview blocks={blocks} authors={authors} />
                  </Card>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
