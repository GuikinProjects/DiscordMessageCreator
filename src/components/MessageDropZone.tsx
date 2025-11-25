import { useState, useMemo } from "react";
import { MessageBlock, MessageBlockType, Author } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AuthorBlockGroup } from "./AuthorBlockGroup";
import { Plus } from "@phosphor-icons/react";

interface MessageDropZoneProps {
  blocks: MessageBlock[];
  authors: Author[];
  onBlocksChange: (blocks: MessageBlock[]) => void;
  onOpenAuthorDialog: () => void;
}

export function MessageDropZone({
  blocks,
  authors,
  onBlocksChange,
  onOpenAuthorDialog,
}: MessageDropZoneProps) {
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [draggedBlockId, setDraggedBlockId] = useState<string | null>(null);
  const [dropTargetIndex, setDropTargetIndex] = useState<number | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
    setIsDraggingOver(true);
  };

  const handleDragLeave = () => {
    setIsDraggingOver(false);
    setDropTargetIndex(null);
  };

  const handleDropAtIndex = (e: React.DragEvent, targetIndex: number) => {
    e.preventDefault();
    e.stopPropagation();

    const blockId = e.dataTransfer.getData("blockId");
    const blockType = e.dataTransfer.getData("blockType") as MessageBlockType;

    if (!blockId && !blockType) return;

    if (blockId) {
      const draggedIndex = blocks.findIndex((b) => b.id === blockId);
      if (draggedIndex === -1) return;

      // Don't move if dropping in the same position
      if (draggedIndex === targetIndex || draggedIndex === targetIndex - 1) {
        setDraggedBlockId(null);
        setDropTargetIndex(null);
        setIsDraggingOver(false);
        return;
      }

      const newBlocks = [...blocks];
      const [draggedBlock] = newBlocks.splice(draggedIndex, 1);

      // Adjust target index if we removed an item before it
      let insertIndex = targetIndex;
      if (draggedIndex < targetIndex) {
        insertIndex = targetIndex - 1;
      }

      newBlocks.splice(insertIndex, 0, draggedBlock);
      onBlocksChange(newBlocks);
    } else if (blockType) {
      const newBlock: MessageBlock = {
        id: Date.now().toString(),
        type: blockType,
        data: {},
      };

      const newBlocks = [...blocks];
      newBlocks.splice(targetIndex, 0, newBlock);
      onBlocksChange(newBlocks);
    }

    setDraggedBlockId(null);
    setDropTargetIndex(null);
    setIsDraggingOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    handleDropAtIndex(e, blocks.length);
  };

  const handleBlockDragStart = (e: React.DragEvent, blockId: string) => {
    setDraggedBlockId(blockId);
    setIsDraggingOver(true);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("blockId", blockId);
  };

  const handleBlockDragEnd = () => {
    setDraggedBlockId(null);
    setDropTargetIndex(null);
    setIsDraggingOver(false);
  };

  const handleDropZoneDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(true);
    setDropTargetIndex(index);
  };

  const handleDropZoneDrop = (e: React.DragEvent, targetIndex: number) => {
    handleDropAtIndex(e, targetIndex);
  };

  const handleDropZoneDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDropTargetIndex(null);
  };

  const handleUpdateBlock = (blockId: string, updatedBlock: MessageBlock) => {
    onBlocksChange(blocks.map((b) => (b.id === blockId ? updatedBlock : b)));
  };

  const handleDeleteBlock = (blockId: string) => {
    onBlocksChange(blocks.filter((b) => b.id !== blockId));
  };

  const handleClearAll = () => {
    onBlocksChange([]);
  };

  const handleDeleteGroup = (authorBlockId: string) => {
    const authorIndex = blocks.findIndex((b) => b.id === authorBlockId);
    if (authorIndex === -1) return;

    let nextAuthorIndex = blocks.findIndex(
      (b, i) => i > authorIndex && b.type === "author"
    );
    if (nextAuthorIndex === -1) nextAuthorIndex = blocks.length;

    const newBlocks = [
      ...blocks.slice(0, authorIndex),
      ...blocks.slice(nextAuthorIndex),
    ];
    onBlocksChange(newBlocks);
  };

  const groupedBlocks = useMemo(() => {
    const groups: Array<{
      authorBlock: MessageBlock;
      authorIndex: number;
      childBlocks: Array<{ block: MessageBlock; index: number }>;
    }> = [];

    let currentAuthorBlock: { block: MessageBlock; index: number } | null =
      null;
    let currentChildBlocks: Array<{ block: MessageBlock; index: number }> = [];

    blocks.forEach((block, index) => {
      if (block.type === "author") {
        if (currentAuthorBlock) {
          groups.push({
            authorBlock: currentAuthorBlock.block,
            authorIndex: currentAuthorBlock.index,
            childBlocks: currentChildBlocks,
          });
        }
        currentAuthorBlock = { block, index };
        currentChildBlocks = [];
      } else if (currentAuthorBlock) {
        currentChildBlocks.push({ block, index });
      }
    });

    if (currentAuthorBlock) {
      groups.push({
        authorBlock: currentAuthorBlock.block,
        authorIndex: currentAuthorBlock.index,
        childBlocks: currentChildBlocks,
      });
    }

    return groups;
  }, [blocks]);

  const cardClasses = [
    "p-6 min-h-[400px] transition-all",
    isDraggingOver ? "border-primary border-2 bg-primary/5" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Card
      className={cardClasses}
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
            <Plus className="mb-2 text-muted-foreground" size={48} />
            <p className="text-muted-foreground">
              Drag and drop items from the panel
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Start by adding an author, then message content
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {groupedBlocks.map((group) => (
              <AuthorBlockGroup
                key={group.authorBlock.id}
                authorBlock={group.authorBlock}
                authorIndex={group.authorIndex}
                childBlocks={group.childBlocks}
                authors={authors}
                onUpdateBlock={handleUpdateBlock}
                onDeleteBlock={handleDeleteBlock}
                onDeleteGroup={() => handleDeleteGroup(group.authorBlock.id)}
                onOpenAuthorDialog={onOpenAuthorDialog}
                onDragStart={handleBlockDragStart}
                onDragEnd={handleBlockDragEnd}
                dropTargetIndex={dropTargetIndex}
                onDropZoneDragOver={handleDropZoneDragOver}
                onDropZoneDrop={handleDropZoneDrop}
                onDropZoneDragLeave={handleDropZoneDragLeave}
              />
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}
