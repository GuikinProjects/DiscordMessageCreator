import { MessageBlockType } from "@/lib/types";
import { Card } from "@/components/ui/card";
import {
  User,
  ChatCircle,
  FrameCorners,
  Image,
  Plus,
} from "@phosphor-icons/react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";

interface DraggableItemProps {
  type: MessageBlockType;
  label: string;
  onAdd?: (type: MessageBlockType) => void;
}

const iconMap = {
  author: User,
  message: ChatCircle,
  embed: FrameCorners,
  image: Image,
};

const colorMap = {
  author: "text-blue-400",
  message: "text-green-400",
  embed: "text-purple-400",
  image: "text-yellow-400",
};

export function DraggableItem({ type, label, onAdd }: DraggableItemProps) {
  const Icon = iconMap[type];
  const isMobile = useIsMobile();

  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData("blockType", type);
    e.dataTransfer.effectAllowed = "copy";
  };

  const handleClick = () => {
    if (isMobile && onAdd) {
      onAdd(type);
    }
  };

  return (
    <Card
      draggable={!isMobile}
      onDragStart={!isMobile ? handleDragStart : undefined}
      onClick={isMobile ? handleClick : undefined}
      className={`p-4 transition-colors border-2 border-dashed border-[#202225] bg-[#2f3136] ${
        isMobile
          ? "cursor-pointer hover:bg-[#404249] active:bg-[#36393f]"
          : "cursor-grab active:cursor-grabbing hover:bg-[#404249]"
      }`}
    >
      <div className="flex items-center gap-3">
        <Icon className={colorMap[type]} size={24} weight="duotone" />
        <span className="font-medium text-gray-200">{label}</span>
        {isMobile && (
          <Button
            size="sm"
            variant="ghost"
            className="ml-auto h-7 w-7 p-0"
            onClick={handleClick}
          >
            <Plus size={18} weight="bold" className="text-green-400" />
          </Button>
        )}
      </div>
    </Card>
  );
}
