import { useEffect } from "react";
import {
  DiscordMessages,
  DiscordMessage,
  DiscordEmbed,
  DiscordEmbedFields,
  DiscordEmbedField,
  DiscordAttachments,
  DiscordReply,
} from "@skyra/discord-components-react";
import { MessageBlock, Author } from "@/lib/types";
import { parseDiscordMarkdown } from "@/lib/markdown";

const formatDateTime = (
  showDate?: boolean,
  showTime?: boolean,
  customDate?: string,
  customTime?: string,
) => {
  if (!showDate && !showTime) return "";

  const now = new Date();
  let date = now;

  // If custom date is provided, use it
  if (customDate?.trim()) {
    const dateStr = customDate.trim();
    date = new Date(dateStr);
    if (Number.isNaN(date.getTime())) {
      date = now;
    }
  }

  // If custom time is provided, apply it
  if (customTime?.trim()) {
    const [hours, minutes] = customTime.trim().split(":");
    if (hours && minutes) {
      date.setHours(parseInt(hours, 10), parseInt(minutes, 10));
    }
  }

  const parts: string[] = [];

  if (showDate) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    parts.push(`${day}/${month}/${year}`);
  }

  if (showTime) {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    parts.push(`${hours}:${minutes}`);
  }

  return parts.join(" ");
};

interface ComposedMessagePreviewProps {
  blocks: MessageBlock[];
  authors: Author[];
}

export function ComposedMessagePreview({
  blocks,
  authors,
}: ComposedMessagePreviewProps) {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      discord-messages {
        background-color: transparent;
        border-radius: 0;
      }
      discord-message {
        margin-bottom: 16px;
      }
      discord-message:last-child {
        margin-bottom: 0;
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
      discord-message .spoiler {
        background-color: #202225;
        color: transparent;
        border-radius: 3px;
        padding: 0 2px;
        cursor: pointer;
        transition: all 0.1s;
        user-select: none;
      }
      discord-message .spoiler:hover,
      discord-message .spoiler:active {
        background-color: rgba(32, 34, 37, 0.6);
        color: #dcddde;
      }
      discord-message a {
        color: #00aff4;
        text-decoration: none;
      }
      discord-message a:hover {
        text-decoration: underline;
      }
      discord-embed-description code {
        background-color: rgba(0, 0, 0, 0.1);
        padding: 2px 4px;
        border-radius: 3px;
        font-family: 'Consolas', 'Courier New', monospace;
        font-size: 0.875em;
      }
      discord-embed-fields code {
        background-color: rgba(0, 0, 0, 0.1);
        padding: 2px 4px;
        border-radius: 3px;
        font-family: 'Consolas', 'Courier New', monospace;
        font-size: 0.875em;
      }
      discord-message ul {
        list-style-type: disc;
        color: #dcddde;
      }
      discord-message ol {
        list-style-type: decimal;
        color: #dcddde;
      }
      discord-message li {
        color: #dcddde;
      }
    `;
    document.head.appendChild(style);

    const handleSpoilerClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains("spoiler")) {
        target.style.backgroundColor = "rgba(32, 34, 37, 0.6)";
        target.style.color = "#dcddde";
      }
    };

    document.addEventListener("click", handleSpoilerClick);

    return () => {
      document.head.removeChild(style);
      document.removeEventListener("click", handleSpoilerClick);
    };
  }, []);

  const getAuthor = (authorId: string | undefined) => {
    if (!authorId) return null;
    return authors.find((a) => a.id === authorId);
  };

  const groupedMessages: Array<{
    author: Author;
    authorBlock: MessageBlock;
    blocks: MessageBlock[];
  }> = [];

  let currentAuthor: Author | null = null;
  let currentAuthorBlock: MessageBlock | null = null;
  let currentBlocks: MessageBlock[] = [];

  for (const block of blocks) {
    if (block.type === "author") {
      if (currentAuthor && currentAuthorBlock && currentBlocks.length > 0) {
        groupedMessages.push({
          author: currentAuthor,
          authorBlock: currentAuthorBlock,
          blocks: currentBlocks,
        });
        currentBlocks = [];
      }
      const author = getAuthor(block.data.authorId);
      currentAuthor = author || null;
      currentAuthorBlock = author ? block : null;
    } else if (currentAuthor) {
      currentBlocks.push(block);
    }
  }

  if (currentAuthor && currentAuthorBlock && currentBlocks.length > 0) {
    groupedMessages.push({
      author: currentAuthor,
      authorBlock: currentAuthorBlock,
      blocks: currentBlocks,
    });
  }

  if (groupedMessages.length === 0) {
    return (
      <div className="overflow-hidden rounded-[28px] border border-white/8 bg-[#36393f] shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
        <div className="border-b border-white/8 px-5 py-4">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-base font-semibold uppercase tracking-[0.18em] text-slate-300">
              Preview
            </h2>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
              Empty state
            </span>
          </div>
        </div>
        <div className="bg-[#36393f] p-5">
          <DiscordMessages>
            <div className="flex h-72 flex-col items-center justify-center rounded-[22px] border border-dashed border-white/10 bg-[#36393f] px-6 text-center text-gray-400">
              <div className="mb-4 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-cyan-300/80">
                Waiting for content
              </div>
              <p className="text-lg font-medium text-white">
                Add an author to start building your message
              </p>
            </div>
          </DiscordMessages>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-[28px] border border-white/8 bg-[#36393f] shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
      <div className="border-b border-white/8 px-5 py-4">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-base font-semibold uppercase tracking-[0.18em] text-slate-300">
            Preview
          </h2>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
            {groupedMessages.length} message group{groupedMessages.length === 1 ? "" : "s"}
          </span>
        </div>
      </div>
      <div className="bg-[#36393f] p-5">
        <DiscordMessages>
          {groupedMessages.map((group, groupIdx) => {
            const messageBlocks = group.blocks.filter(
              (b) => b.type === "message",
            );
            const messageContent = messageBlocks
              .filter((b) => b.data.content)
              .map((b) => b.data.content)
              .join("\n");

            // Get reply from the first message block that has one
            const reply = messageBlocks.find((b) => b.data.reply)?.data.reply;
            const replyAuthor = reply
              ? authors.find((a) => a.id === reply.authorId)
              : null;

            // Check if any message block is marked as edited
            const isEdited = messageBlocks.some((b) => b.data.edited);

            const embeds = group.blocks.filter(
              (b) => b.type === "embed" && b.data.embed,
            );
            const images = group.blocks.filter(
              (b) => b.type === "image" && b.data.imageUrl,
            );

            const showDate = Boolean(
              group.authorBlock.data.showDate ?? group.author.showDate,
            );
            const showTime = Boolean(
              group.authorBlock.data.showTime ?? group.author.showTime,
            );
            const customDate =
              group.authorBlock.data.customDate ?? group.author.customDate;
            const customTime =
              group.authorBlock.data.customTime ?? group.author.customTime;

            const messageTimestamp = formatDateTime(
              showDate,
              showTime,
              customDate,
              customTime,
            );

            return (
              <DiscordMessage
                key={groupIdx}
                author={group.author.username}
                avatar={group.author.avatar}
                roleColor={group.author.roleColor}
                bot={group.author.isBot}
                verified={group.author.verified}
                roleIcon={group.author.badgeUrl}
                edited={isEdited}
                timestamp={messageTimestamp}
              >
                {reply && replyAuthor && (
                  <DiscordReply
                    slot="reply"
                    author={replyAuthor.username}
                    avatar={replyAuthor.avatar}
                    roleColor={replyAuthor.roleColor}
                    bot={replyAuthor.isBot}
                    edited={reply.edited}
                    attachment={reply.attachment}
                    style={{ marginLeft: "55px" }}
                  >
                    {reply.content}
                  </DiscordReply>
                )}

                {messageContent && (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: parseDiscordMarkdown(messageContent),
                    }}
                  />
                )}

                {embeds.map((embedBlock) => {
                  const embed = embedBlock.data.embed;
                  if (!embed) return null;

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
                          {embed.fields.map((field, fieldIdx) => (
                            <DiscordEmbedField
                              key={fieldIdx}
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
                      {embed.footerText && (
                        <div slot="footer">{embed.footerText}</div>
                      )}
                    </DiscordEmbed>
                  );
                })}

                {images.length > 0 && (
                  <DiscordAttachments slot="attachments">
                    {images.map((imageBlock) => (
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
            );
          })}
        </DiscordMessages>
      </div>
    </div>
  );
}
