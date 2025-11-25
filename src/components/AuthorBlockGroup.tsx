import { MessageBlock, Author } from '@/lib/types'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { MessageBlockEditor } from './MessageBlockEditor'
import { Trash, User } from '@phosphor-icons/react'

interface AuthorBlockGroupProps {
  authorBlock: MessageBlock
  childBlocks: MessageBlock[]
  authors: Author[]
  onUpdateBlock: (blockId: string, block: MessageBlock) => void
  onDeleteBlock: (blockId: string) => void
  onDeleteGroup: () => void
  onOpenAuthorDialog: () => void
  onDragStart?: (e: React.DragEvent, blockId: string) => void
  onDragEnd?: () => void
}

export function AuthorBlockGroup({
  authorBlock,
  childBlocks,
  authors,
  onUpdateBlock,
  onDeleteBlock,
  onDeleteGroup,
  onOpenAuthorDialog,
  onDragStart,
  onDragEnd,
}: AuthorBlockGroupProps) {
  const author = authors.find((a) => a.id === authorBlock.data.authorId)
  const authorName = author?.username || 'Select an author'

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value={authorBlock.id} className="border rounded-lg bg-[#2f3136] border-[#202225]">
        <div className="flex items-center gap-2 pr-3">
          <AccordionTrigger className="flex-1 px-4 py-3 hover:no-underline">
            <div className="flex items-center gap-3">
              {author?.avatar ? (
                <img
                  src={author.avatar}
                  alt={authorName}
                  className="w-8 h-8 rounded-full object-cover"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-[#202225] flex items-center justify-center">
                  <User size={20} className="text-gray-400" />
                </div>
              )}
              <div className="flex items-center gap-2">
                <span 
                  className="font-semibold text-sm"
                  style={{ color: author?.roleColor || '#ffffff' }}
                >
                  {authorName}
                </span>
                {author?.badgeUrl && (
                  <img
                    src={author.badgeUrl}
                    alt="Role badge"
                    className="w-4 h-4 object-contain"
                  />
                )}
                <span className="text-xs text-gray-400">
                  ({childBlocks.length} block{childBlocks.length !== 1 ? 's' : ''})
                </span>
              </div>
            </div>
          </AccordionTrigger>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-gray-400 hover:text-red-400 flex-shrink-0"
            onClick={onDeleteGroup}
          >
            <Trash size={16} />
          </Button>
        </div>
        <AccordionContent className="px-4 pb-3 space-y-2">
          {/* Author selector */}
          <MessageBlockEditor
            block={authorBlock}
            authors={authors}
            onUpdate={(updatedBlock) => onUpdateBlock(authorBlock.id, updatedBlock)}
            onDelete={() => {}}
            onOpenAuthorDialog={onOpenAuthorDialog}
            onDragStart={onDragStart ? (e) => onDragStart(e, authorBlock.id) : undefined}
            onDragEnd={onDragEnd}
          />
          
          {/* Child blocks */}
          {childBlocks.map((block) => (
            <MessageBlockEditor
              key={block.id}
              block={block}
              authors={authors}
              onUpdate={(updatedBlock) => onUpdateBlock(block.id, updatedBlock)}
              onDelete={() => onDeleteBlock(block.id)}
              onOpenAuthorDialog={onOpenAuthorDialog}
              onDragStart={onDragStart ? (e) => onDragStart(e, block.id) : undefined}
              onDragEnd={onDragEnd}
            />
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
