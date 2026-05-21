import { MessageBlock, Author, Embed, Reply } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import {
  Trash,
  DotsSixVertical,
  ArrowBendUpLeft,
  X,
} from "@phosphor-icons/react";
import { EmbedDialog } from "./EmbedDialog";
import { useState, useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface MessageBlockEditorProps {
  block: MessageBlock;
  authors: Author[];
  onUpdate: (block: MessageBlock) => void;
  onDelete: () => void;
  onOpenAuthorDialog: () => void;
  onDragStart?: (e: React.DragEvent) => void;
  onDragEnd?: () => void;
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
  const selectClasses =
    "flex h-9 w-full max-w-full items-center rounded-md border border-input bg-transparent px-3 py-2 text-sm text-foreground shadow-xs outline-none transition-[color,box-shadow] focus:border-ring focus:ring-3 focus:ring-ring/50";
  const isMobile = useIsMobile();
  const [embedDialogOpen, setEmbedDialogOpen] = useState(false);
  const [localContent, setLocalContent] = useState(block.data.content || "");
  const [localImageUrl, setLocalImageUrl] = useState(block.data.imageUrl || "");
  const [isDragging, setIsDragging] = useState(false);
  const contentTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const imageTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    setLocalContent(block.data.content || "");
  }, [block.data.content]);

  useEffect(() => {
    setLocalImageUrl(block.data.imageUrl || "");
  }, [block.data.imageUrl]);

  useEffect(() => {
    return () => {
      if (contentTimeoutRef.current) {
        clearTimeout(contentTimeoutRef.current);
      }

      if (imageTimeoutRef.current) {
        clearTimeout(imageTimeoutRef.current);
      }
    };
  }, []);

  const handleDataChange = (key: string, value: any) => {
    onUpdate({
      ...block,
      data: {
        ...block.data,
        [key]: value,
      },
    });
  };

  const handleContentChange = (value: string) => {
    setLocalContent(value);

    if (contentTimeoutRef.current) {
      clearTimeout(contentTimeoutRef.current);
    }

    contentTimeoutRef.current = setTimeout(() => {
      handleDataChange("content", value);
    }, 300);
  };

  const handleImageUrlChange = (value: string) => {
    setLocalImageUrl(value);

    if (imageTimeoutRef.current) {
      clearTimeout(imageTimeoutRef.current);
    }

    imageTimeoutRef.current = setTimeout(() => {
      handleDataChange("imageUrl", value);
    }, 500);
  };

  const handleSaveEmbed = (embed: Embed) => {
    handleDataChange("embed", embed);
  };

  const renderEditor = () => {
    switch (block.type) {
      case "author":
        const selectedAuthor = authors.find(
          (a) => a.id === block.data.authorId,
        );
        return (
          <div className="space-y-3">
            <select
              value={block.data.authorId || ""}
              onChange={(e) => handleDataChange("authorId", e.target.value)}
              className={selectClasses}
            >
              <option value="">Select an author</option>
              {authors.map((author) => (
                <option key={author.id} value={author.id}>
                  {author.username}{author.isBot ? " [BOT]" : ""}
                </option>
              ))}
            </select>

            {selectedAuthor && (
              <div className="p-3 space-y-3 border rounded-lg bg-muted/30">
                {/* Show Date Section */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Label htmlFor="showDate" className="text-sm font-medium">
                      Show Date
                    </Label>
                    <Switch
                      id="showDate"
                      checked={
                        (block.data.showDate ??
                          selectedAuthor?.showDate ??
                          false) as boolean
                      }
                      onCheckedChange={(checked) =>
                        handleDataChange("showDate", checked)
                      }
                    />
                  </div>
                  <div className="pl-3 space-y-2 border-l-2 border-primary/30">
                    <Label htmlFor="customDate" className="text-xs">
                      Custom Date
                    </Label>
                    <Input
                      id="customDate"
                      type="date"
                      value={
                        block.data.customDate ??
                        selectedAuthor?.customDate ??
                        ""
                      }
                      onChange={(e) =>
                        handleDataChange("customDate", e.target.value)
                      }
                      placeholder="Select date"
                      className="h-8 text-sm"
                      disabled={
                        !(block.data.showDate ?? selectedAuthor?.showDate)
                      }
                    />
                    <p className="text-xs text-muted-foreground">
                      Leave empty for current date
                    </p>
                  </div>
                </div>

                {/* Show Time Section */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Label htmlFor="showTime" className="text-sm font-medium">
                      Show Time
                    </Label>
                    <Switch
                      id="showTime"
                      checked={
                        (block.data.showTime ??
                          selectedAuthor?.showTime ??
                          false) as boolean
                      }
                      onCheckedChange={(checked) =>
                        handleDataChange("showTime", checked)
                      }
                    />
                  </div>
                  <div className="pl-3 space-y-2 border-l-2 border-primary/30">
                    <Label htmlFor="customTime" className="text-xs">
                      Custom Time
                    </Label>
                    <Input
                      id="customTime"
                      type="time"
                      value={
                        block.data.customTime ??
                        selectedAuthor?.customTime ??
                        ""
                      }
                      onChange={(e) =>
                        handleDataChange("customTime", e.target.value)
                      }
                      placeholder="Select time"
                      className="h-8 text-sm"
                      disabled={
                        !(block.data.showTime ?? selectedAuthor?.showTime)
                      }
                    />
                    <p className="text-xs text-muted-foreground">
                      Leave empty for current time
                    </p>
                  </div>
                </div>
              </div>
            )}

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
        );

      case "message":
        return (
          <div className="space-y-3">
            {/* Reply section */}
            {!block.data.reply ? (
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  handleDataChange("reply", { authorId: "", content: "" })
                }
                className="w-full"
              >
                <ArrowBendUpLeft className="mr-2" size={16} />
                Add Reply
              </Button>
            ) : (
              <div className="p-3 space-y-2 border rounded-lg bg-muted/50">
                <div className="flex items-center justify-between mb-2">
                  <Label className="text-xs font-semibold">Reply To</Label>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-6 h-6"
                    onClick={() => handleDataChange("reply", undefined)}
                  >
                    <X size={14} />
                  </Button>
                </div>

                <select
                  value={block.data.reply.authorId || ""}
                  onChange={(e) =>
                    handleDataChange("reply", {
                      ...block.data.reply,
                      authorId: e.target.value,
                    })
                  }
                  className={`${selectClasses} h-8 text-sm`}
                >
                  <option value="">Select author</option>
                  {authors.map((author) => (
                    <option key={author.id} value={author.id}>
                      {author.username}
                    </option>
                  ))}
                </select>

                <Input
                  value={block.data.reply.content || ""}
                  onChange={(e) =>
                    handleDataChange("reply", {
                      ...block.data.reply,
                      content: e.target.value,
                    })
                  }
                  placeholder="Original message content..."
                  className="h-8 text-sm"
                />

                <div className="flex gap-4 text-xs">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <Checkbox
                      checked={block.data.reply.edited || false}
                      onCheckedChange={(checked) =>
                        handleDataChange("reply", {
                          ...block.data.reply,
                          edited: checked,
                        })
                      }
                    />
                    <span>Edited</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <Checkbox
                      checked={block.data.reply.attachment || false}
                      onCheckedChange={(checked) =>
                        handleDataChange("reply", {
                          ...block.data.reply,
                          attachment: checked,
                        })
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
                  onCheckedChange={(checked) =>
                    handleDataChange("edited", checked)
                  }
                />
                <span className="text-sm">Edited</span>
              </label>
            </div>
          </div>
        );

      case "embed":
        return (
          <div className="space-y-2">
            <Button
              variant={block.data.embed ? "secondary" : "outline"}
              onClick={() => setEmbedDialogOpen(true)}
              className="w-full"
            >
              {block.data.embed ? "Edit Embed" : "Configure Embed"}
            </Button>
            {block.data.embed && (
              <div className="text-xs text-muted-foreground">
                {block.data.embed.title && (
                  <div>Title: {block.data.embed.title}</div>
                )}
                {block.data.embed.description && (
                  <div>
                    Description: {block.data.embed.description.substring(0, 50)}
                    ...
                  </div>
                )}
              </div>
            )}
          </div>
        );

      case "image":
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
                className="object-cover w-full rounded-md max-h-32"
                onError={(e) => {
                  e.currentTarget.src = "";
                  e.currentTarget.alt = "Invalid image URL";
                }}
              />
            )}
          </div>
        );
    }
  };

  const blockTypeLabels = {
    author: "Author",
    message: "Message",
    embed: "Embed",
    image: "Image",
  };

  const handleDragStart = (e: React.DragEvent) => {
    setIsDragging(true);
    if (onDragStart) {
      onDragStart(e);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    if (onDragEnd) {
      onDragEnd();
    }
  };

  return (
    <>
      <Card
        className={`p-4 bg-card transition-all ${isMobile ? "" : "cursor-move hover:border-primary/50"
          } ${isDragging ? "opacity-50 border-primary" : ""}`}
        draggable={!isMobile}
        onDragStart={!isMobile ? handleDragStart : undefined}
        onDragEnd={!isMobile ? handleDragEnd : undefined}
      >
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {!isMobile && (
                <div className="transition-colors cursor-grab active:cursor-grabbing hover:text-primary">
                  <DotsSixVertical
                    className="text-muted-foreground"
                    size={20}
                    weight="bold"
                  />
                </div>
              )}
              <span className="text-sm font-medium">
                {blockTypeLabels[block.type]}
              </span>
            </div>
            <Button variant="ghost" size="sm" onClick={onDelete}>
              <Trash className="text-destructive" />
            </Button>
          </div>
          {renderEditor()}
        </div>
      </Card>

      {block.type === "embed" && (
        <EmbedDialog
          open={embedDialogOpen}
          onOpenChange={setEmbedDialogOpen}
          onSave={handleSaveEmbed}
          initialEmbed={block.data.embed}
        />
      )}
    </>
  );
}
