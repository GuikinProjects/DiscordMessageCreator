import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Plus, ChatCircle } from '@phosphor-icons/react'
import { Author, Message, Embed } from '@/lib/types'
import { EmbedDialog } from './EmbedDialog'

interface MessageComposerProps {
  authors: Author[]
  onAddMessage: (message: Message) => void
  onOpenAuthorDialog: () => void
}

export function MessageComposer({ authors, onAddMessage, onOpenAuthorDialog }: MessageComposerProps) {
  const [content, setContent] = useState('')
  const [selectedAuthorId, setSelectedAuthorId] = useState('')
  const [embed, setEmbed] = useState<Embed | undefined>(undefined)
  const [embedDialogOpen, setEmbedDialogOpen] = useState(false)

  const handleAddMessage = () => {
    if (!content.trim() || !selectedAuthorId) return

    const message: Message = {
      id: Date.now().toString(),
      authorId: selectedAuthorId,
      content: content.trim(),
      timestamp: new Date(),
      embed: embed,
    }

    onAddMessage(message)
    setContent('')
    setEmbed(undefined)
  }

  return (
    <>
      <Card className="p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Compose Message</h3>
            <ChatCircle className="text-primary" size={24} />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="author">Author</Label>
            <div className="flex gap-2">
              <Select value={selectedAuthorId} onValueChange={setSelectedAuthorId}>
                <SelectTrigger id="author" className="flex-1">
                  <SelectValue placeholder="Select an author" />
                </SelectTrigger>
                <SelectContent>
                  {authors.map((author) => (
                    <SelectItem key={author.id} value={author.id}>
                      <div className="flex items-center gap-2">
                        {author.avatar && (
                          <img
                            src={author.avatar}
                            alt={author.username}
                            className="w-5 h-5 rounded-full"
                          />
                        )}
                        <span style={{ color: author.roleColor }}>{author.username}</span>
                        {author.isBot && (
                          <Badge variant="secondary" className="text-xs">BOT</Badge>
                        )}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button variant="outline" onClick={onOpenAuthorDialog}>
                <Plus />
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Message Content</Label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Type your message here... Discord markdown supported!"
              rows={4}
            />
            {/* <p className="text-xs text-muted-foreground">
              Supports Discord markdown: **bold**, *italic*, __underline__, ~~strikethrough~~, `code`, ```code block```
            </p> */}
          </div>

          <div className="space-y-2">
            <Label>Embed</Label>
            <div className="flex gap-2">
              <Button
                type="button"
                variant={embed ? "secondary" : "outline"}
                onClick={() => setEmbedDialogOpen(true)}
                className="flex-1"
              >
                {embed ? 'Edit Embed' : 'Add Embed'}
              </Button>
              {embed && (
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => setEmbed(undefined)}
                >
                  Remove
                </Button>
              )}
            </div>
          </div>

          <Button
            onClick={handleAddMessage}
            disabled={!content.trim() || !selectedAuthorId}
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <Plus className="mr-2" />
            Add Message
          </Button>
        </div>
      </Card>

      <EmbedDialog
        open={embedDialogOpen}
        onOpenChange={setEmbedDialogOpen}
        onSave={setEmbed}
        initialEmbed={embed}
      />
    </>
  )
}
