import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Export, Upload, Image as ImageIcon } from '@phosphor-icons/react'
import { Message, Author } from '@/lib/types'
import { toast } from 'sonner'
import { useRef } from 'react'
import { toPng } from 'html-to-image'

interface ExportPanelProps {
  messages: Message[]
  authors: Author[]
  onImport: (data: { messages: Message[], authors: Author[] }) => void
}

export function ExportPanel({ messages, authors, onImport }: ExportPanelProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  
  const hasAuthors = authors && authors.length > 0

  const handleCopyJSON = () => {
    const data = {
      messages,
      authors,
    }
    navigator.clipboard.writeText(JSON.stringify(data, null, 2))
    toast.success('JSON copied to clipboard!')
  }

  const handleSaveAsPNG = async () => {
    const previewElements = document.querySelectorAll('discord-messages')
    
    if (previewElements.length === 0) {
      toast.error('No preview to export. Add an author and message to the composition area.')
      return
    }

    try {
      // Get the last preview element (the live preview)
      const previewElement = previewElements[previewElements.length - 1] as HTMLElement
      
      // Get the parent container to maintain proper width
      const container = previewElement.parentElement as HTMLElement
      
      // Store original styles
      const originalWidth = container.style.width
      const originalMinWidth = container.style.minWidth
      const originalMaxWidth = container.style.maxWidth
      const originalHeight = container.style.height
      const originalMinHeight = container.style.minHeight
      
      // Set fixed width for consistent export (Discord's standard content width)
      const exportWidth = 600 // Fixed width in pixels for consistent exports
      container.style.width = `${exportWidth}px`
      container.style.minWidth = `${exportWidth}px`
      container.style.maxWidth = `${exportWidth}px`
      container.style.height = 'auto'
      container.style.minHeight = 'auto'
      
      // Wait a moment for the layout to settle
      await new Promise(resolve => setTimeout(resolve, 150))
      
      // Get the actual height after layout adjustment
      const actualHeight = container.scrollHeight
      
      // Capture with fixed width and auto height for high quality
      const dataUrl = await toPng(container, {
        quality: 1.0,
        pixelRatio: 3, // 3x resolution for high quality
        backgroundColor: '#36393f',
        width: exportWidth,
        height: actualHeight,
        style: {
          transform: 'scale(1)',
          transformOrigin: 'top left'
        }
      })
      
      // Restore original styles
      container.style.width = originalWidth
      container.style.minWidth = originalMinWidth
      container.style.maxWidth = originalMaxWidth
      container.style.height = originalHeight
      container.style.minHeight = originalMinHeight

      // Create download link
      const link = document.createElement('a')
      link.download = `discord-preview-${Date.now()}.png`
      link.href = dataUrl
      link.click()

      toast.success('Preview saved as PNG!')
    } catch (error) {
      console.error('Error saving PNG:', error)
      toast.error('Failed to save preview as PNG')
    }
  }

  const handleExportJSON = () => {
    const data = {
      messages,
      authors,
      exportedAt: new Date().toISOString(),
    }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `discord-messages-${Date.now()}.json`
    a.click()
    URL.revokeObjectURL(url)
    toast.success('JSON file downloaded!')
  }

  const handleImportJSON = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    if (!file.name.endsWith('.json')) {
      toast.error('Please select a valid JSON file')
      return
    }

    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string
        const data = JSON.parse(content)

        if (!data.messages || !data.authors) {
          toast.error('Invalid file format. Missing messages or authors data.')
          return
        }

        // Convert timestamp strings back to Date objects
        const messagesWithDates = data.messages.map((msg: Message) => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        }))

        onImport({
          messages: messagesWithDates,
          authors: data.authors
        })

        toast.success(`Imported ${data.authors.length} authors and ${data.messages.length} messages!`)
      } catch (error) {
        console.error('Import error:', error)
        toast.error('Failed to import file. Please check the file format.')
      }
    }

    reader.readAsText(file)
    // Reset input so the same file can be selected again
    event.target.value = ''
  }

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Export size={24} className="text-primary" />
          <h3 className="text-lg font-semibold">Export & Import</h3>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-2">
              Export your Discord messages in various formats for use in documentation, presentations, or development.
            </p>

            <div className="grid gap-2">
              <Button
                onClick={handleSaveAsPNG}
                variant="outline"
                className="justify-start w-full"
              >
                <ImageIcon className="mr-2" size={16} />
                Save Preview as PNG
              </Button>

              <Button
                onClick={handleExportJSON}
                variant="outline"
                className="justify-start w-full"
                disabled={!hasAuthors}
              >
                <Export className="mr-2" size={16} />
                Download JSON File
              </Button>

              {!hasAuthors && (
                <p className="text-xs text-muted-foreground pt-2">
                  Add some authors to enable JSON export
                </p>
              )}
            </div>
          </div>

          <div className="border-t pt-4">
            <p className="text-sm text-muted-foreground mb-2">
              Import authors and messages from a previously exported JSON file.
            </p>

            <Button
              onClick={handleImportJSON}
              variant="outline"
              className="justify-start w-full"
            >
              <Upload className="mr-2" />
              Import JSON File
            </Button>

            <Input
              ref={fileInputRef}
              type="file"
              accept=".json"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
        </div>
      </div>
    </Card>
  )
}
