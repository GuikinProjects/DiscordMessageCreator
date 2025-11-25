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
        background-color: #36393f;
        border-radius: 8px;
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
    blocks: MessageBlock[];
  }> = [];

  let currentAuthor: Author | null = null;
  let currentBlocks: MessageBlock[] = [];

  for (const block of blocks) {
    if (block.type === "author") {
      if (currentAuthor && currentBlocks.length > 0) {
        groupedMessages.push({ author: currentAuthor, blocks: currentBlocks });
        currentBlocks = [];
      }
      const author = getAuthor(block.data.authorId);
      currentAuthor = author || null;
    } else if (currentAuthor) {
      currentBlocks.push(block);
    }
  }

  if (currentAuthor && currentBlocks.length > 0) {
    groupedMessages.push({ author: currentAuthor, blocks: currentBlocks });
  }

  if (groupedMessages.length === 0) {
    return (
      <div className="bg-[#36393f] rounded-lg overflow-hidden p-4">
        <DiscordMessages>
          <div className="flex items-center justify-center h-64 text-gray-400">
            Add an author to start building your message
          </div>
        </DiscordMessages>
      </div>
    );
  }

  return (
    <div className="bg-[#36393f] rounded-lg overflow-hidden p-4">
      <DiscordMessages>
        {groupedMessages.map((group, groupIdx) => {
          const messageBlocks = group.blocks.filter(
            (b) => b.type === "message"
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
            (b) => b.type === "embed" && b.data.embed
          );
          const images = group.blocks.filter(
            (b) => b.type === "image" && b.data.imageUrl
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
  );
}
