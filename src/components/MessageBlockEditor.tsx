import { MessageBlock, Author, Embed, Reply } from '@/lib/types'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { Trash, DotsSixVertical, ArrowBendUpLeft, X } from '@phosphor-icons/react'
import { EmbedDialog } from './EmbedDialog'
import { useState, useEffect, useRef } from 'react'

interface MessageBlockEditorProps {
  block: MessageBlock
  authors: Author[]
  onUpdate: (block: MessageBlock) => void
  onDelete: () => void
  onOpenAuthorDialog: () => void
  onDragStart?: (e: React.DragEvent) => void
  onDragEnd?: () => void
}

export function MessageBlockEditor({
  block,
  authors,
  onUpdate,
  onDelete,
  onOpenAuthorDialog,
  onDragStart,
  onDragEnd,
}: MessageBlockEditorProps) {
  const [embedDialogOpen, setEmbedDialogOpen] = useState(false)
  const [localContent, setLocalContent] = useState(block.data.content || '')
  const [localImageUrl, setLocalImageUrl] = useState(block.data.imageUrl || '')
  const [isDragging, setIsDragging] = useState(false)
  const contentTimeoutRef = useRef<NodeJS.Timeout>()
  const imageTimeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    setLocalContent(block.data.content || '')
  }, [block.id])

  useEffect(() => {
    setLocalImageUrl(block.data.imageUrl || '')
  }, [block.id])

  const handleDataChange = (key: string, value: any) => {
    onUpdate({
      ...block,
      data: {
        ...block.data,
        [key]: value,
      },
    })
  }

  const handleContentChange = (value: string) => {
    setLocalContent(value)
    
    if (contentTimeoutRef.current) {
      clearTimeout(contentTimeoutRef.current)
    }
    
    contentTimeoutRef.current = setTimeout(() => {
      handleDataChange('content', value)
    }, 300)
  }

  const handleImageUrlChange = (value: string) => {
    setLocalImageUrl(value)
    
    if (imageTimeoutRef.current) {
      clearTimeout(imageTimeoutRef.current)
    }
    
    imageTimeoutRef.current = setTimeout(() => {
      handleDataChange('imageUrl', value)
    }, 500)
  }

  const handleSaveEmbed = (embed: Embed) => {
    handleDataChange('embed', embed)
  }

  const renderEditor = () => {
    switch (block.type) {
      case 'author':
        return (
          <div className="space-y-2">
            <Select
              value={block.data.authorId || ''}
              onValueChange={(value) => handleDataChange('authorId', value)}
            >
              <SelectTrigger>
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
                        <Badge variant="secondary" className="text-xs">
                          BOT
                        </Badge>
                      )}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {authors.length === 0 && (
              <Button
                variant="outline"
                size="sm"
                onClick={onOpenAuthorDialog}
                className="w-full"
              >
                Create Author
              </Button>
            )}
          </div>
        )

      case 'message':
        return (
          <div className="space-y-3">
            {/* Reply section */}
            {!block.data.reply ? (
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleDataChange('reply', { authorId: '', content: '' })}
                className="w-full"
              >
                <ArrowBendUpLeft className="mr-2" size={16} />
                Add Reply
              </Button>
            ) : (
              <div className="border rounded-lg p-3 space-y-2 bg-muted/50">
                <div className="flex items-center justify-between mb-2">
                  <Label className="text-xs font-semibold">Reply To</Label>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6"
                    onClick={() => handleDataChange('reply', undefined)}
                  >
                    <X size={14} />
                  </Button>
                </div>
                
                <Select
                  value={block.data.reply.authorId || ''}
                  onValueChange={(value) =>
                    handleDataChange('reply', { ...block.data.reply, authorId: value })
                  }
                >
                  <SelectTrigger className="h-8">
                    <SelectValue placeholder="Select author" />
                  </SelectTrigger>
                  <SelectContent>
                    {authors.map((author) => (
                      <SelectItem key={author.id} value={author.id}>
                        <div className="flex items-center gap-2">
                          {author.avatar && (
                            <img
                              src={author.avatar}
                              alt={author.username}
                              className="w-4 h-4 rounded-full"
                            />
                          )}
                          <span style={{ color: author.roleColor }}>{author.username}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Input
                  value={block.data.reply.content || ''}
                  onChange={(e) =>
                    handleDataChange('reply', { ...block.data.reply, content: e.target.value })
                  }
                  placeholder="Original message content..."
                  className="h-8 text-sm"
                />
                
                <div className="flex gap-4 text-xs">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <Checkbox
                      checked={block.data.reply.edited || false}
                      onCheckedChange={(checked) =>
                        handleDataChange('reply', { ...block.data.reply, edited: checked })
                      }
                    />
                    <span>Edited</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <Checkbox
                      checked={block.data.reply.attachment || false}
                      onCheckedChange={(checked) =>
                        handleDataChange('reply', { ...block.data.reply, attachment: checked })
                      }
                    />
                    <span>Has Attachment</span>
                  </label>
                </div>
              </div>
            )}
            
            {/* Message content */}
            <Textarea
              value={localContent}
              onChange={(e) => handleContentChange(e.target.value)}
              placeholder="Type your message... Discord markdown supported!"
              rows={3}
            />
            
            <div className="flex items-center justify-between">
              {/* <p className="text-xs text-muted-foreground">
                Supports: **bold**, *italic*, __underline__, ~~strikethrough~~, `code`
              </p> */}
              <label className="flex items-center gap-2 cursor-pointer">
                <Checkbox
                  checked={block.data.edited || false}
                  onCheckedChange={(checked) => handleDataChange('edited', checked)}
                />
                <span className="text-sm">Edited</span>
              </label>
            </div>
          </div>
        )

      case 'embed':
        return (
          <div className="space-y-2">
            <Button
              variant={block.data.embed ? 'secondary' : 'outline'}
              onClick={() => setEmbedDialogOpen(true)}
              className="w-full"
            >
              {block.data.embed ? 'Edit Embed' : 'Configure Embed'}
            </Button>
            {block.data.embed && (
              <div className="text-xs text-muted-foreground">
                {block.data.embed.title && <div>Title: {block.data.embed.title}</div>}
                {block.data.embed.description && (
                  <div>Description: {block.data.embed.description.substring(0, 50)}...</div>
                )}
              </div>
            )}
          </div>
        )

      case 'image':
        return (
          <div className="space-y-2">
            <Input
              value={localImageUrl}
              onChange={(e) => handleImageUrlChange(e.target.value)}
              placeholder="https://example.com/image.png"
            />
            {block.data.imageUrl && (
              <img
                src={block.data.imageUrl}
                alt="Preview"
                className="w-full rounded-md max-h-32 object-cover"
                onError={(e) => {
                  e.currentTarget.src = ''
                  e.currentTarget.alt = 'Invalid image URL'
                }}
              />
            )}
          </div>
        )
    }
  }

  const blockTypeLabels = {
    author: 'Author',
    message: 'Message',
    embed: 'Embed',
    image: 'Image',
  }

  const handleDragStart = (e: React.DragEvent) => {
    setIsDragging(true)
    if (onDragStart) {
      onDragStart(e)
    }
  }

  const handleDragEnd = () => {
    setIsDragging(false)
    if (onDragEnd) {
      onDragEnd()
    }
  }

  return (
    <>
      <Card 
        className={`p-4 bg-card cursor-move hover:border-primary/50 transition-all ${isDragging ? 'opacity-50 border-primary' : ''}`}
        draggable
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="cursor-grab active:cursor-grabbing hover:text-primary transition-colors">
                <DotsSixVertical className="text-muted-foreground" size={20} weight="bold" />
              </div>
              <span className="font-medium text-sm">{blockTypeLabels[block.type]}</span>
            </div>
            <Button variant="ghost" size="sm" onClick={onDelete}>
              <Trash className="text-destructive" />
            </Button>
          </div>
          {renderEditor()}
        </div>
      </Card>

      {block.type === 'embed' && (
        <EmbedDialog
          open={embedDialogOpen}
          onOpenChange={setEmbedDialogOpen}
          onSave={handleSaveEmbed}
          initialEmbed={block.data.embed}
        />
      )}
    </>
  )
}
