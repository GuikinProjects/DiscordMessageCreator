import { useState, useMemo } from 'react'
import { MessageBlock, MessageBlockType, Author } from '@/lib/types'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AuthorBlockGroup } from './AuthorBlockGroup'
import { Plus } from '@phosphor-icons/react'

interface MessageDropZoneProps {
  blocks: MessageBlock[]
  authors: Author[]
  onBlocksChange: (blocks: MessageBlock[]) => void
  onOpenAuthorDialog: () => void
}

export function MessageDropZone({
  blocks,
  authors,
  onBlocksChange,
  onOpenAuthorDialog,
}: MessageDropZoneProps) {
  const [isDraggingOver, setIsDraggingOver] = useState(false)
  const [draggedBlockId, setDraggedBlockId] = useState<string | null>(null)
  const [dropTargetIndex, setDropTargetIndex] = useState<number | null>(null)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'copy'
    setIsDraggingOver(true)
  }

  const handleDragLeave = () => {
    setIsDraggingOver(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDraggingOver(false)

    const blockType = e.dataTransfer.getData('blockType') as MessageBlockType
    if (!blockType) return

    const newBlock: MessageBlock = {
      id: Date.now().toString(),
      type: blockType,
      data: {},
    }

    onBlocksChange([...blocks, newBlock])
  }

  const handleBlockDragStart = (e: React.DragEvent, blockId: string) => {
    setDraggedBlockId(blockId)
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('blockId', blockId)
  }

  const handleBlockDragEnd = () => {
    setDraggedBlockId(null)
    setDropTargetIndex(null)
  }

  const handleDropZoneDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (!draggedBlockId) return
    
    setDropTargetIndex(index)
  }

  const handleDropZoneDrop = (e: React.DragEvent, targetIndex: number) => {
    e.preventDefault()
    e.stopPropagation()

    if (!draggedBlockId) return

    const draggedIndex = blocks.findIndex((b) => b.id === draggedBlockId)
    if (draggedIndex === -1 || draggedIndex === targetIndex) return

    const newBlocks = [...blocks]
    const [draggedBlock] = newBlocks.splice(draggedIndex, 1)
    
    const insertIndex = draggedIndex < targetIndex ? targetIndex - 1 : targetIndex
    
    newBlocks.splice(insertIndex, 0, draggedBlock)
    onBlocksChange(newBlocks)
    
    setDraggedBlockId(null)
    setDropTargetIndex(null)
  }

  const handleUpdateBlock = (blockId: string, updatedBlock: MessageBlock) => {
    onBlocksChange(blocks.map((b) => (b.id === blockId ? updatedBlock : b)))
  }

  const handleDeleteBlock = (blockId: string) => {
    onBlocksChange(blocks.filter((b) => b.id !== blockId))
  }

  const handleClearAll = () => {
    onBlocksChange([])
  }

  const handleDeleteGroup = (authorBlockId: string) => {
    const authorIndex = blocks.findIndex((b) => b.id === authorBlockId)
    if (authorIndex === -1) return

    // Find the next author block or end of array
    let nextAuthorIndex = blocks.findIndex((b, i) => i > authorIndex && b.type === 'author')
    if (nextAuthorIndex === -1) nextAuthorIndex = blocks.length

    // Remove the author and all its child blocks
    const newBlocks = [
      ...blocks.slice(0, authorIndex),
      ...blocks.slice(nextAuthorIndex)
    ]
    onBlocksChange(newBlocks)
  }

  // Group blocks by author
  const groupedBlocks = useMemo(() => {
    const groups: Array<{ authorBlock: MessageBlock; childBlocks: MessageBlock[] }> = []
    let currentAuthorBlock: MessageBlock | null = null
    let currentChildBlocks: MessageBlock[] = []

    for (const block of blocks) {
      if (block.type === 'author') {
        if (currentAuthorBlock) {
          groups.push({ authorBlock: currentAuthorBlock, childBlocks: currentChildBlocks })
        }
        currentAuthorBlock = block
        currentChildBlocks = []
      } else if (currentAuthorBlock) {
        currentChildBlocks.push(block)
      }
    }

    if (currentAuthorBlock) {
      groups.push({ authorBlock: currentAuthorBlock, childBlocks: currentChildBlocks })
    }

    return groups
  }, [blocks])

  return (
    <Card
      className={`p-6 min-h-[400px] transition-all ${
        isDraggingOver ? 'border-primary border-2 bg-primary/5' : ''
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="space-y-4">
        {blocks.length > 0 && (
          <div className="flex items-center justify-end mb-2">
            <Button variant="ghost" size="sm" onClick={handleClearAll}>
              Clear All
            </Button>
          </div>
        )}

        {blocks.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-center border-2 border-dashed rounded-lg">
            <Plus className="text-muted-foreground mb-2" size={48} />
            <p className="text-muted-foreground">
              Drag and drop items from the panel
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Start by adding an author, then message content
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {groupedBlocks.map((group) => (
              <AuthorBlockGroup
                key={group.authorBlock.id}
                authorBlock={group.authorBlock}
                childBlocks={group.childBlocks}
                authors={authors}
                onUpdateBlock={handleUpdateBlock}
                onDeleteBlock={handleDeleteBlock}
                onDeleteGroup={() => handleDeleteGroup(group.authorBlock.id)}
                onOpenAuthorDialog={onOpenAuthorDialog}
                onDragStart={handleBlockDragStart}
                onDragEnd={handleBlockDragEnd}
              />
            ))}
          </div>
        )}
      </div>
    </Card>
  )
}
