import { MessageBlockType } from '@/lib/types'
import { Card } from '@/components/ui/card'
import { User, ChatCircle, FrameCorners, Image } from '@phosphor-icons/react'

interface DraggableItemProps {
  type: MessageBlockType
  label: string
}

const iconMap = {
  author: User,
  message: ChatCircle,
  embed: FrameCorners,
  image: Image,
}

const colorMap = {
  author: 'text-blue-400',
  message: 'text-green-400',
  embed: 'text-purple-400',
  image: 'text-yellow-400',
}

export function DraggableItem({ type, label }: DraggableItemProps) {
  const Icon = iconMap[type]

  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData('blockType', type)
    e.dataTransfer.effectAllowed = 'copy'
  }

  return (
    <Card
      draggable
      onDragStart={handleDragStart}
      className="p-4 cursor-grab active:cursor-grabbing hover:bg-[#404249] transition-colors border-2 border-dashed border-[#202225] bg-[#2f3136]"
    >
      <div className="flex items-center gap-3">
        <Icon className={colorMap[type]} size={24} weight="duotone" />
        <span className="font-medium text-gray-200">{label}</span>
      </div>
    </Card>
  )
}
