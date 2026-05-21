import { useState, useMemo } from "react";
import { MessageBlock, MessageBlockType, Author } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AuthorBlockGroup } from "./AuthorBlockGroup";
import { Plus } from "@phosphor-icons/react";
import { useIsMobile } from "@/hooks/use-mobile";

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
  const isMobile = useIsMobile();
  const [isDraggingOver, setIsDraggingOver] = useState(false);
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

    setDropTargetIndex(null);
    setIsDraggingOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    handleDropAtIndex(e, blocks.length);
  };

  const handleBlockDragStart = (e: React.DragEvent, blockId: string) => {
    setIsDraggingOver(true);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("blockId", blockId);
  };

  const handleBlockDragEnd = () => {
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
      (b, i) => i > authorIndex && b.type === "author",
    );
    if (nextAuthorIndex === -1) nextAuthorIndex = blocks.length;

    const newBlocks = [
      ...blocks.slice(0, authorIndex),
      ...blocks.slice(nextAuthorIndex),
    ];
    onBlocksChange(newBlocks);
  };

  type GroupChildBlock = { block: MessageBlock; index: number };

  const groupedBlocks = useMemo(() => {
    const groups: Array<{
      authorBlock: MessageBlock;
      authorIndex: number;
      childBlocks: Array<GroupChildBlock>;
    }> = [];

    let currentAuthorBlock: { block: MessageBlock; index: number } | null =
      null;
    let currentChildBlocks: Array<GroupChildBlock> = [];

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
      const authorBlock: { block: MessageBlock; index: number } =
        currentAuthorBlock;
      groups.push({
        authorBlock: authorBlock.block,
        authorIndex: authorBlock.index,
        childBlocks: currentChildBlocks,
      });
    }

    return groups;
  }, [blocks]);

  const cardClasses = [
    "min-h-[400px] rounded-[28px] border border-white/8 bg-[#1f222c]/90 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.28)] transition-all backdrop-blur",
    isDraggingOver ? "border-cyan-400/60 bg-cyan-400/6 ring-2 ring-cyan-400/20" : "",
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
        <div className="flex flex-col gap-4 border-b border-white/8 pb-5 md:flex-row md:items-center md:justify-between">
          <h2 className="text-base font-semibold uppercase tracking-[0.18em] text-slate-300">
            Canvas
          </h2>
          <div className="flex flex-wrap gap-2 text-xs text-slate-200">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
              {blocks.length} active block{blocks.length === 1 ? "" : "s"}
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
              {authors.length} available author{authors.length === 1 ? "" : "s"}
            </span>
            {blocks.length > 0 && (
              <Button variant="ghost" size="sm" onClick={handleClearAll} className="h-auto rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-slate-200 hover:bg-white/10 hover:text-white">
                Clear All
              </Button>
            )}
          </div>
        </div>

        {blocks.length === 0 ? (
          <div className="flex h-[420px] flex-col items-center justify-center rounded-[24px] border border-dashed border-white/12 bg-gradient-to-b from-white/[0.04] to-transparent px-6 text-center">
            <div className="mb-5 rounded-full border border-white/10 bg-white/5 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
              <Plus className="text-cyan-300" size={42} />
            </div>
            <p className="text-lg font-medium text-white">
              {isMobile
                ? "Open the menu and tap a block to start composing"
                : "Drag a block from the sidebar to start composing"}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs text-slate-200">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                1. Add author
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                2. Add message
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                3. Review preview
              </span>
            </div>
            {authors.length === 0 && (
              <Button className="mt-6 rounded-full bg-cyan-500 px-5 text-slate-950 hover:bg-cyan-400" onClick={onOpenAuthorDialog}>
                Create first author
              </Button>
            )}
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
