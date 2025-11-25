import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Author } from '@/lib/types'

interface AuthorDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSave: (author: Author) => void
  editingAuthor?: Author
}

export function AuthorDialog({ open, onOpenChange, onSave, editingAuthor }: AuthorDialogProps) {
  const [username, setUsername] = useState('')
  const [avatar, setAvatar] = useState('')
  const [roleColor, setRoleColor] = useState('#5865F2')
  const [isBot, setIsBot] = useState(false)
  const [badgeUrl, setBadgeUrl] = useState('')

  useEffect(() => {
    if (editingAuthor) {
      setUsername(editingAuthor.username)
      setAvatar(editingAuthor.avatar || '')
      setRoleColor(editingAuthor.roleColor || '#5865F2')
      setIsBot(editingAuthor.isBot || false)
      setBadgeUrl(editingAuthor.badgeUrl || '')
    } else {
      setUsername('')
      setAvatar('')
      setRoleColor('#5865F2')
      setIsBot(false)
      setBadgeUrl('')
    }
  }, [editingAuthor, open])

  const handleSave = () => {
    if (!username.trim()) return

    const author: Author = {
      id: editingAuthor?.id || Date.now().toString(),
      username: username.trim(),
      avatar: avatar.trim() || undefined,
      roleColor: roleColor,
      isBot,
      badgeUrl: badgeUrl.trim() || undefined,
    }

    onSave(author)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{editingAuthor ? 'Edit Author' : 'Create New Author'}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="avatar">Avatar URL</Label>
            <Input
              id="avatar"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
              placeholder="https://example.com/avatar.png"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="roleColor">Role Color</Label>
            <div className="flex gap-2">
              <Input
                id="roleColor"
                type="color"
                value={roleColor}
                onChange={(e) => setRoleColor(e.target.value)}
                className="w-20 h-10"
              />
              <Input
                value={roleColor}
                onChange={(e) => setRoleColor(e.target.value)}
                placeholder="#5865F2"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="isBot">Bot Badge</Label>
            <Switch id="isBot" checked={isBot} onCheckedChange={setIsBot} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="badgeUrl">Profile Badge URL (optional)</Label>
            <Input
              id="badgeUrl"
              value={badgeUrl}
              onChange={(e) => setBadgeUrl(e.target.value)}
              placeholder="https://example.com/badge.png"
            />
            <p className="text-xs text-muted-foreground">
              Custom badge icon displayed next to username
            </p>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={!username.trim()}>
            Save Author
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
