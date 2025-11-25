import { useState, useEffect } from 'react'
import {
  DiscordMessages,
  DiscordMessage,
  DiscordEmbed,
  DiscordEmbedFields,
  DiscordEmbedField,
  DiscordAttachments,
} from '@skyra/discord-components-react'
import { MessageBlock, Author, MessageBlockType } from '@/lib/types'
import { parseDiscordMarkdown } from '@/lib/markdown'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { X, Check } from '@phosphor-icons/react'

interface DiscordMessageComposerProps {
  blocks: MessageBlock[]
  authors: Author[]
  onBlocksChange: (blocks: MessageBlock[]) => void
  onOpenAuthorDialog: () => void
}

export function DiscordMessageComposer({
  blocks,
  authors,
  onBlocksChange,
  onOpenAuthorDialog,
}: DiscordMessageComposerProps) {
  const [isDraggingOver, setIsDraggingOver] = useState(false)
  const [editingBlockId, setEditingBlockId] = useState<string | null>(null)

  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      discord-messages {
        background-color: #36393f !important;
        border-radius: 8px;
        min-height: 500px;
        padding: 16px;
      }
      discord-message {
        background-color: transparent !important;
      }
      discord-message code {
        background-color: #2f3136;
        padding: 2px 4px;
        border-radius: 3px;
        font-family: 'Consolas', 'Courier New', monospace;
        font-size: 0.875em;
        color: #dcddde;
      }
      discord-message pre {
        background-color: #2f3136;
        padding: 8px;
        border-radius: 4px;
        overflow-x: auto;
        margin: 4px 0;
        border: 1px solid #202225;
      }
      discord-message pre code {
        background-color: transparent;
        padding: 0;
        font-size: 0.875em;
      }
      discord-message blockquote {
        border-left: 4px solid #4f545c;
        padding-left: 12px;
        margin: 4px 0;
        color: #dcddde;
      }
      discord-message strong {
        font-weight: 700;
        color: #ffffff;
      }
      discord-message em {
        font-style: italic;
      }
      discord-message u {
        text-decoration: underline;
      }
      discord-message s {
        text-decoration: line-through;
      }
      discord-embed-description code,
      discord-embed-fields code {
        background-color: rgba(0, 0, 0, 0.1);
        padding: 2px 4px;
        border-radius: 3px;
        font-family: 'Consolas', 'Courier New', monospace;
        font-size: 0.875em;
      }
    `
    document.head.appendChild(style)
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style)
      }
    }
  }, [])

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    e.dataTransfer.dropEffect = 'copy'
    setIsDraggingOver(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDraggingOver(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDraggingOver(false)

    const blockType = e.dataTransfer.getData('blockType') as MessageBlockType
    if (!blockType) return

    const newBlock: MessageBlock = {
      id: Date.now().toString(),
      type: blockType,
      data: {},
    }

    onBlocksChange([...blocks, newBlock])
    setEditingBlockId(newBlock.id)
  }

  const handleUpdateBlock = (blockId: string, data: MessageBlock['data']) => {
    onBlocksChange(
      blocks.map((b) => (b.id === blockId ? { ...b, data: { ...b.data, ...data } } : b))
    )
  }

  const handleDeleteBlock = (blockId: string) => {
    onBlocksChange(blocks.filter((b) => b.id !== blockId))
    if (editingBlockId === blockId) {
      setEditingBlockId(null)
    }
  }

  const authorBlock = blocks.find((b) => b.type === 'author')
  const author = authorBlock ? authors.find((a) => a.id === authorBlock.data.authorId) : null

  const messageBlocks = blocks.filter((b) => b.type === 'message')
  const embedBlocks = blocks.filter((b) => b.type === 'embed')
  const imageBlocks = blocks.filter((b) => b.type === 'image')

  const formatTimestamp = () => {
    return new Date().toLocaleString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const renderInlineBlockEditor = (block: MessageBlock) => {
    const isEditing = editingBlockId === block.id

    if (block.type === 'author') {
      return (
        <div className="bg-[#2f3136] rounded p-3 border border-[#202225] hover:border-primary/50 transition-colors">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Author</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-5 w-5 text-gray-400 hover:text-red-400"
              onClick={() => handleDeleteBlock(block.id)}
            >
              <X size={12} />
            </Button>
          </div>
          <Select
            value={block.data.authorId || ''}
            onValueChange={(value) => handleUpdateBlock(block.id, { authorId: value })}
          >
            <SelectTrigger className="bg-[#202225] border-[#202225]">
              <SelectValue placeholder="Select an author" />
            </SelectTrigger>
            <SelectContent>
              {authors.map((author) => (
                <SelectItem key={author.id} value={author.id}>
                  {author.username}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {authors.length === 0 && (
            <Button
              variant="link"
              size="sm"
              className="mt-2 p-0 h-auto text-primary"
              onClick={onOpenAuthorDialog}
            >
              Create an author first
            </Button>
          )}
        </div>
      )
    }

    if (block.type === 'message') {
      return (
        <div className={`bg-[#2f3136] rounded p-3 border transition-colors ${isEditing ? 'border-primary' : 'border-[#202225] hover:border-primary/50'}`}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Message Content</span>
            <div className="flex gap-1">
              {isEditing && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-5 w-5 text-green-400 hover:text-green-300"
                  onClick={() => setEditingBlockId(null)}
                >
                  <Check size={12} />
                </Button>
              )}
              <Button
                variant="ghost"
                size="icon"
                className="h-5 w-5 text-gray-400 hover:text-red-400"
                onClick={() => handleDeleteBlock(block.id)}
              >
                <X size={12} />
              </Button>
            </div>
          </div>
          {isEditing ? (
            <>
              <Textarea
                placeholder="Type your message... (Discord markdown supported)"
                value={block.data.content || ''}
                onChange={(e) => handleUpdateBlock(block.id, { content: e.target.value })}
                rows={4}
                className="bg-[#202225] border-[#202225] text-gray-200 placeholder:text-gray-500 resize-none focus:border-primary"
                autoFocus
              />
              {/* <p className="text-xs text-gray-500 mt-2">
                Supports: **bold**, *italic*, __underline__, ~~strikethrough~~, `code`, ||spoiler||
              </p> */}
            </>
          ) : (
            <div 
              className="text-sm text-gray-200 min-h-[2rem] cursor-text p-2 rounded hover:bg-[#202225] transition-colors"
              onClick={() => setEditingBlockId(block.id)}
            >
              {block.data.content ? (
                <span className="whitespace-pre-wrap">{block.data.content}</span>
              ) : (
                <span className="text-gray-500 italic">Click to type message...</span>
              )}
            </div>
          )}
        </div>
      )
    }

    if (block.type === 'embed') {
      return (
        <div className={`bg-[#2f3136] rounded p-3 border transition-colors ${isEditing ? 'border-primary' : 'border-[#202225] hover:border-primary/50'}`}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Embed</span>
            <div className="flex gap-1">
              {isEditing && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-5 w-5 text-green-400 hover:text-green-300"
                  onClick={() => setEditingBlockId(null)}
                >
                  <Check size={12} />
                </Button>
              )}
              <Button
                variant="ghost"
                size="icon"
                className="h-5 w-5 text-gray-400 hover:text-red-400"
                onClick={() => handleDeleteBlock(block.id)}
              >
                <X size={12} />
              </Button>
            </div>
          </div>
          {isEditing ? (
            <div className="space-y-3">
              <div>
                <Label className="text-xs text-gray-400">Title</Label>
                <Input
                  placeholder="Embed title"
                  value={block.data.embed?.title || ''}
                  onChange={(e) =>
                    handleUpdateBlock(block.id, {
                      embed: { ...block.data.embed, title: e.target.value },
                    })
                  }
                  className="bg-[#202225] border-[#202225] text-gray-200 placeholder:text-gray-500"
                />
              </div>
              <div>
                <Label className="text-xs text-gray-400">Description</Label>
                <Textarea
                  placeholder="Embed description (supports markdown)"
                  value={block.data.embed?.description || ''}
                  onChange={(e) =>
                    handleUpdateBlock(block.id, {
                      embed: { ...block.data.embed, description: e.target.value },
                    })
                  }
                  rows={3}
                  className="bg-[#202225] border-[#202225] text-gray-200 placeholder:text-gray-500 resize-none"
                />
              </div>
              <div>
                <Label className="text-xs text-gray-400">Color (hex)</Label>
                <Input
                  placeholder="#5865F2"
                  value={block.data.embed?.color || ''}
                  onChange={(e) =>
                    handleUpdateBlock(block.id, {
                      embed: { ...block.data.embed, color: e.target.value },
                    })
                  }
                  className="bg-[#202225] border-[#202225] text-gray-200 placeholder:text-gray-500"
                />
              </div>
              <div>
                <Label className="text-xs text-gray-400">Image URL</Label>
                <Input
                  placeholder="https://example.com/image.png"
                  value={block.data.embed?.image || ''}
                  onChange={(e) =>
                    handleUpdateBlock(block.id, {
                      embed: { ...block.data.embed, image: e.target.value },
                    })
                  }
                  className="bg-[#202225] border-[#202225] text-gray-200 placeholder:text-gray-500"
                />
              </div>
            </div>
          ) : (
            <div 
              className="text-sm p-2 rounded hover:bg-[#202225] transition-colors cursor-pointer"
              onClick={() => setEditingBlockId(block.id)}
            >
              {block.data.embed?.title ? (
                <div>
                  <div className="font-semibold text-gray-200">{block.data.embed.title}</div>
                  {block.data.embed.description && (
                    <div className="text-gray-400 text-xs mt-1">{block.data.embed.description.substring(0, 50)}...</div>
                  )}
                </div>
              ) : (
                <span className="text-gray-500 italic">Click to configure embed...</span>
              )}
            </div>
          )}
        </div>
      )
    }

    if (block.type === 'image') {
      return (
        <div className={`bg-[#2f3136] rounded p-3 border transition-colors ${isEditing ? 'border-primary' : 'border-[#202225] hover:border-primary/50'}`}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Image</span>
            <div className="flex gap-1">
              {isEditing && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-5 w-5 text-green-400 hover:text-green-300"
                  onClick={() => setEditingBlockId(null)}
                >
                  <Check size={12} />
                </Button>
              )}
              <Button
                variant="ghost"
                size="icon"
                className="h-5 w-5 text-gray-400 hover:text-red-400"
                onClick={() => handleDeleteBlock(block.id)}
              >
                <X size={12} />
              </Button>
            </div>
          </div>
          {isEditing ? (
            <div>
              <Label className="text-xs text-gray-400">Image URL</Label>
              <Input
                placeholder="https://example.com/image.png"
                value={block.data.imageUrl || ''}
                onChange={(e) => handleUpdateBlock(block.id, { imageUrl: e.target.value })}
                className="bg-[#202225] border-[#202225] text-gray-200 placeholder:text-gray-500"
                autoFocus
              />
            </div>
          ) : (
            <div 
              className="cursor-pointer p-2 rounded hover:bg-[#202225] transition-colors"
              onClick={() => setEditingBlockId(block.id)}
            >
              {block.data.imageUrl ? (
                <img src={block.data.imageUrl} alt="Preview" className="max-w-full rounded" />
              ) : (
                <span className="text-gray-500 italic text-sm">Click to add image URL...</span>
              )}
            </div>
          )}
        </div>
      )
    }

    return null
  }

  const messageContent = messageBlocks
    .filter((b) => b.data.content)
    .map((b) => b.data.content)
    .join('\n\n')

  return (
    <div
      className={`relative rounded-lg overflow-hidden transition-all ${
        isDraggingOver ? 'ring-2 ring-primary ring-offset-2' : ''
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="bg-[#36393f] rounded-lg">
        <DiscordMessages>
          {blocks.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-96 text-center p-8">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-4 0-7-3-7-7V8.3l7-3.5 7 3.5V13c0 4-3 7-7 7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-300 mb-2">
                Drag elements here to start
              </h3>
              <p className="text-sm text-gray-400">
                Drop Author, Message, Embed, or Image blocks from the sidebar
              </p>
            </div>
          ) : !author ? (
            <div className="p-8 space-y-4">
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <h3 className="text-xl font-semibold text-gray-300 mb-2">Add an Author</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Drag an Author block or configure the existing one
                </p>
              </div>
              <div className="space-y-3">{blocks.map((block) => (
                <div key={block.id}>{renderInlineBlockEditor(block)}</div>
              ))}</div>
            </div>
          ) : (
            <>
              <DiscordMessage
                author={author.username}
                avatar={author.avatar}
                roleColor={author.roleColor}
                bot={author.isBot}
                verified={author.isBot ? true : undefined}
                roleIcon={author.badgeUrl}
              >
                {messageContent && (
                  <span dangerouslySetInnerHTML={{ __html: parseDiscordMarkdown(messageContent) }} />
                )}

                {embedBlocks.map((embedBlock) => {
                  const embed = embedBlock.data.embed
                  if (!embed || !embed.title) return null

                  return (
                    <DiscordEmbed
                      key={embedBlock.id}
                      slot="embeds"
                      color={embed.color}
                      embedTitle={embed.title}
                      url={embed.url}
                      thumbnail={embed.thumbnail}
                      image={embed.image}
                      authorName={embed.authorName}
                      authorImage={embed.authorIcon}
                      authorUrl={embed.authorUrl}
                    >
                      {embed.description && (
                        <div
                          slot="description"
                          dangerouslySetInnerHTML={{
                            __html: parseDiscordMarkdown(embed.description),
                          }}
                        />
                      )}
                      {embed.fields && embed.fields.length > 0 && (
                        <DiscordEmbedFields slot="fields">
                          {embed.fields.map((field, idx) => (
                            <DiscordEmbedField
                              key={idx}
                              fieldTitle={field.name}
                              inline={field.inline}
                            >
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: parseDiscordMarkdown(field.value),
                                }}
                              />
                            </DiscordEmbedField>
                          ))}
                        </DiscordEmbedFields>
                      )}
                      {embed.footerText && <div slot="footer">{embed.footerText}</div>}
                    </DiscordEmbed>
                  )
                })}

                {imageBlocks.length > 0 && imageBlocks.some((b) => b.data.imageUrl) && (
                  <DiscordAttachments slot="attachments">
                    {imageBlocks
                      .filter((b) => b.data.imageUrl)
                      .map((imageBlock) => (
                        <img
                          key={imageBlock.id}
                          src={imageBlock.data.imageUrl}
                          alt="Attachment"
                          className="max-w-full rounded"
                        />
                      ))}
                  </DiscordAttachments>
                )}
              </DiscordMessage>

              <div className="p-4 space-y-3 border-t border-[#202225]">
                {blocks.map((block) => (
                  <div key={block.id}>{renderInlineBlockEditor(block)}</div>
                ))}
              </div>
            </>
          )}
        </DiscordMessages>
      </div>
    </div>
  )
}
