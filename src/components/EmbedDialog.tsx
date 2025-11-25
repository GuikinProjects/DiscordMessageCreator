import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { Plus, Trash } from '@phosphor-icons/react'
import { Embed, EmbedField } from '@/lib/types'

interface EmbedDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSave: (embed: Embed | undefined) => void
  initialEmbed?: Embed
}

export function EmbedDialog({ open, onOpenChange, onSave, initialEmbed }: EmbedDialogProps) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [color, setColor] = useState('#5865F2')
  const [url, setUrl] = useState('')
  const [thumbnail, setThumbnail] = useState('')
  const [image, setImage] = useState('')
  const [authorName, setAuthorName] = useState('')
  const [authorIcon, setAuthorIcon] = useState('')
  const [fields, setFields] = useState<EmbedField[]>([])
  const [footerText, setFooterText] = useState('')

  useEffect(() => {
    if (initialEmbed) {
      setTitle(initialEmbed.title || '')
      setDescription(initialEmbed.description || '')
      setColor(initialEmbed.color || '#5865F2')
      setUrl(initialEmbed.url || '')
      setThumbnail(initialEmbed.thumbnail || '')
      setImage(initialEmbed.image || '')
      setAuthorName(initialEmbed.authorName || '')
      setAuthorIcon(initialEmbed.authorIcon || '')
      setFields(initialEmbed.fields || [])
      setFooterText(initialEmbed.footerText || '')
    } else {
      setTitle('')
      setDescription('')
      setColor('#5865F2')
      setUrl('')
      setThumbnail('')
      setImage('')
      setAuthorName('')
      setAuthorIcon('')
      setFields([])
      setFooterText('')
    }
  }, [initialEmbed, open])

  const handleAddField = () => {
    setFields([...fields, { name: '', value: '', inline: false }])
  }

  const handleRemoveField = (index: number) => {
    setFields(fields.filter((_, i) => i !== index))
  }

  const handleFieldChange = (index: number, field: Partial<EmbedField>) => {
    setFields(fields.map((f, i) => (i === index ? { ...f, ...field } : f)))
  }

  const handleSave = () => {
    const embed: Embed = {
      title: title.trim() || undefined,
      description: description.trim() || undefined,
      color: color,
      url: url.trim() || undefined,
      thumbnail: thumbnail.trim() || undefined,
      image: image.trim() || undefined,
      authorName: authorName.trim() || undefined,
      authorIcon: authorIcon.trim() || undefined,
      fields: fields.filter(f => f.name.trim() && f.value.trim()),
      footerText: footerText.trim() || undefined,
    }

    onSave(embed)
    onOpenChange(false)
  }

  const handleRemoveEmbed = () => {
    onSave(undefined)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>Configure Embed</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="embedTitle">Title</Label>
              <Input
                id="embedTitle"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Embed title"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Embed description"
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="embedColor">Color</Label>
              <div className="flex gap-2">
                <Input
                  id="embedColor"
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="w-20 h-10"
                />
                <Input
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  placeholder="#5865F2"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="url">URL</Label>
              <Input
                id="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com"
              />
            </div>
            <Separator />
            <div className="space-y-2">
              <Label htmlFor="authorName">Author Name</Label>
              <Input
                id="authorName"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                placeholder="Author name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="authorIcon">Author Icon URL</Label>
              <Input
                id="authorIcon"
                value={authorIcon}
                onChange={(e) => setAuthorIcon(e.target.value)}
                placeholder="https://example.com/icon.png"
              />
            </div>
            <Separator />
            <div className="space-y-2">
              <Label htmlFor="thumbnail">Thumbnail URL</Label>
              <Input
                id="thumbnail"
                value={thumbnail}
                onChange={(e) => setThumbnail(e.target.value)}
                placeholder="https://example.com/thumbnail.png"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="image">Image URL</Label>
              <Input
                id="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="https://example.com/image.png"
              />
            </div>
            <Separator />
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>Fields</Label>
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  onClick={handleAddField}
                >
                  <Plus className="mr-2" />
                  Add Field
                </Button>
              </div>
              {fields.map((field, index) => (
                <div key={index} className="space-y-2 p-4 border rounded-lg">
                  <div className="flex justify-between items-center">
                    <Label>Field {index + 1}</Label>
                    <Button
                      type="button"
                      size="sm"
                      variant="ghost"
                      onClick={() => handleRemoveField(index)}
                    >
                      <Trash />
                    </Button>
                  </div>
                  <Input
                    value={field.name}
                    onChange={(e) => handleFieldChange(index, { name: e.target.value })}
                    placeholder="Field name"
                  />
                  <Textarea
                    value={field.value}
                    onChange={(e) => handleFieldChange(index, { value: e.target.value })}
                    placeholder="Field value"
                    rows={2}
                  />
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={field.inline}
                      onCheckedChange={(checked) => handleFieldChange(index, { inline: checked })}
                    />
                    <Label>Inline</Label>
                  </div>
                </div>
              ))}
            </div>
            <Separator />
            <div className="space-y-2">
              <Label htmlFor="footerText">Footer Text</Label>
              <Input
                id="footerText"
                value={footerText}
                onChange={(e) => setFooterText(e.target.value)}
                placeholder="Footer text"
              />
            </div>
          </div>
        </ScrollArea>
        <DialogFooter className="gap-2">
          {initialEmbed && (
            <Button variant="destructive" onClick={handleRemoveEmbed}>
              Remove Embed
            </Button>
          )}
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave}>
            Save Embed
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
