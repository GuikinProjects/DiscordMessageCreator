import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Plus, User, PencilSimple, Trash } from '@phosphor-icons/react'
import { Author } from '@/lib/types'

interface AuthorsPanelProps {
  authors: Author[]
  onAddAuthor: () => void
  onEditAuthor: (author: Author) => void
  onDeleteAuthor: (id: string) => void
}

export function AuthorsPanel({ authors, onAddAuthor, onEditAuthor, onDeleteAuthor }: AuthorsPanelProps) {
  return (
    <Card className="p-4 bg-[#2f3136] border-[#202225]">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-white">Authors</h3>
          <Button onClick={onAddAuthor} size="sm" className="bg-blue-500 hover:bg-blue-600 text-white">
            <Plus className="mr-1" size={16} />
            New
          </Button>
        </div>

        <ScrollArea className="h-[400px]">
          {authors.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-gray-400">
              <User size={48} className="mb-4 opacity-50" />
              <p className="text-sm">No authors yet</p>
              <p className="text-xs">Create your first author</p>
            </div>
          ) : (
            <div className="space-y-2">
              {authors.map((author) => (
                <div
                  key={author.id}
                  className="flex items-center gap-3 p-3 border border-[#202225] rounded-lg hover:bg-[#404249] transition-colors"
                >
                  {author.avatar ? (
                    <img
                      src={author.avatar}
                      alt={author.username}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-[#202225] flex items-center justify-center">
                      <User size={24} className="text-gray-400" />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span
                        className="font-semibold truncate text-sm"
                        style={{ color: author.roleColor || '#ffffff' }}
                      >
                        {author.username}
                      </span>
                      {author.badgeUrl && (
                        <img
                          src={author.badgeUrl}
                          alt="Role badge"
                          className="w-4 h-4 object-contain"
                        />
                      )}
                      {author.isBot && (
                        <Badge variant="secondary" className="text-xs bg-blue-500 text-white">BOT</Badge>
                      )}
                    </div>
                    <p className="text-xs text-gray-400">{author.roleColor || 'No color'}</p>
                  </div>
                  <div className="flex gap-1">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 w-8 p-0 text-gray-400 hover:text-white"
                      onClick={() => onEditAuthor(author)}
                    >
                      <PencilSimple size={16} />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 w-8 p-0 text-gray-400 hover:text-red-400"
                      onClick={() => onDeleteAuthor(author.id)}
                    >
                      <Trash size={16} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
      </div>
    </Card>
  )
}
