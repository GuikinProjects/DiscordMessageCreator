import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'
import { Trash, ChatCircle } from '@phosphor-icons/react'
import { Message, Author } from '@/lib/types'

interface MessagesPanelProps {
  messages: Message[]
  authors: Author[]
  onDeleteMessage: (id: string) => void
  onClearAll: () => void
}

export function MessagesPanel({ messages, authors, onDeleteMessage, onClearAll }: MessagesPanelProps) {
  const getAuthor = (authorId: string) => {
    return authors.find((a) => a.id === authorId)
  }

  return (
    <Card className="p-4 bg-[#2f3136] border-[#202225]">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-white">Messages ({messages.length})</h3>
          {messages.length > 0 && (
            <Button
              onClick={onClearAll}
              size="sm"
              variant="destructive"
              className="bg-red-500 hover:bg-red-600"
            >
              Clear All
            </Button>
          )}
        </div>

        <ScrollArea className="h-[400px]">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-gray-400">
              <ChatCircle size={48} className="mb-4 opacity-50" />
              <p className="text-sm">No messages yet</p>
              <p className="text-xs">Compose and save messages</p>
            </div>
          ) : (
            <div className="space-y-2">
              {messages.map((message) => {
                const author = getAuthor(message.authorId)
                if (!author) return null

                return (
                  <div
                    key={message.id}
                    className="flex gap-3 p-3 border border-[#202225] rounded-lg hover:bg-[#404249] transition-colors group"
                  >
                    {author.avatar ? (
                      <img
                        src={author.avatar}
                        alt={author.username}
                        className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-[#202225] flex items-center justify-center flex-shrink-0">
                        <ChatCircle size={24} className="text-gray-400" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="font-semibold text-sm"
                          style={{ color: author.roleColor || '#ffffff' }}
                        >
                          {author.username}
                        </span>
                        {author.isBot && (
                          <Badge variant="secondary" className="text-xs bg-blue-500 text-white">BOT</Badge>
                        )}
                        <span className="text-xs text-gray-400">
                          {new Date(message.timestamp).toLocaleTimeString()}
                        </span>
                      </div>
                      <p className="text-sm line-clamp-2 text-gray-300">{message.content}</p>
                      {message.embed && (
                        <Badge variant="outline" className="mt-1 text-xs border-[#202225] text-purple-400">
                          Has Embed
                        </Badge>
                      )}
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => onDeleteMessage(message.id)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 p-0 text-gray-400 hover:text-red-400"
                    >
                      <Trash size={16} />
                    </Button>
                  </div>
                )
              })}
            </div>
          )}
        </ScrollArea>
      </div>
    </Card>
  )
}
