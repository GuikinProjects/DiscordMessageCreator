import { useEffect } from 'react'
import {
  DiscordMessages,
  DiscordMessage,
  DiscordEmbed,
  DiscordEmbedFields,
  DiscordEmbedField,
} from '@skyra/discord-components-react'
import { Message, Author } from '@/lib/types'
import { parseDiscordMarkdown } from '@/lib/markdown'

interface DiscordPreviewProps {
  messages: Message[]
  authors: Author[]
}

export function DiscordPreview({ messages, authors }: DiscordPreviewProps) {
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      discord-messages {
        background-color: #36393f;
        border-radius: 8px;
        min-height: 400px;
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
    `
    document.head.appendChild(style)

    const handleSpoilerClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.classList.contains('spoiler')) {
        target.style.backgroundColor = 'rgba(32, 34, 37, 0.6)'
        target.style.color = '#dcddde'
      }
    }

    document.addEventListener('click', handleSpoilerClick)

    return () => {
      document.head.removeChild(style)
      document.removeEventListener('click', handleSpoilerClick)
    }
  }, [])

  const getAuthor = (authorId: string) => {
    return authors.find((a) => a.id === authorId)
  }

  return (
    <div className="bg-[#36393f] rounded-lg overflow-hidden">
      <DiscordMessages>
        {messages.map((message) => {
          const author = getAuthor(message.authorId)
          if (!author) return null

          return (
            <DiscordMessage
              key={message.id}
              author={author.username}
              avatar={author.avatar}
              roleColor={author.roleColor}
              bot={author.isBot}
              verified={author.isBot ? true : undefined}
              roleIcon={author.badgeUrl}
            >
              <span dangerouslySetInnerHTML={{ __html: parseDiscordMarkdown(message.content) }} />
              {message.embed && (
                <DiscordEmbed
                  slot="embeds"
                  color={message.embed.color}
                  embedTitle={message.embed.title}
                  url={message.embed.url}
                  thumbnail={message.embed.thumbnail}
                  image={message.embed.image}
                  authorName={message.embed.authorName}
                  authorImage={message.embed.authorIcon}
                  authorUrl={message.embed.authorUrl}
                >
                  {message.embed.description && (
                    <div 
                      slot="description" 
                      dangerouslySetInnerHTML={{ __html: parseDiscordMarkdown(message.embed.description) }} 
                    />
                  )}
                  {message.embed.fields && message.embed.fields.length > 0 && (
                    <DiscordEmbedFields slot="fields">
                      {message.embed.fields.map((field, idx) => (
                        <DiscordEmbedField
                          key={idx}
                          fieldTitle={field.name}
                          inline={field.inline}
                        >
                          <span dangerouslySetInnerHTML={{ __html: parseDiscordMarkdown(field.value) }} />
                        </DiscordEmbedField>
                      ))}
                    </DiscordEmbedFields>
                  )}
                  {message.embed.footerText && (
                    <div slot="footer">{message.embed.footerText}</div>
                  )}
                </DiscordEmbed>
              )}
            </DiscordMessage>
          )
        })}
        {messages.length === 0 && (
          <div className="flex items-center justify-center h-64 text-gray-400">
            No messages yet. Create your first message to get started!
          </div>
        )}
      </DiscordMessages>
    </div>
  )
}
