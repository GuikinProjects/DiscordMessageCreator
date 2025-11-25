export interface Author {
  id: string
  username: string
  avatar?: string
  roleColor?: string
  isBot?: boolean
  badgeUrl?: string
}

export interface EmbedField {
  name: string
  value: string
  inline?: boolean
}

export interface Embed {
  title?: string
  description?: string
  color?: string
  url?: string
  thumbnail?: string
  image?: string
  authorName?: string
  authorIcon?: string
  authorUrl?: string
  fields?: EmbedField[]
  footerText?: string
  footerIcon?: string
  timestamp?: string
}

export interface Reply {
  authorId: string
  content: string
  edited?: boolean
  attachment?: boolean
}

export interface Message {
  id: string
  authorId: string
  content: string
  timestamp: Date
  embed?: Embed
  attachments?: string[]
  reply?: Reply
}

export type MessageBlockType = 'author' | 'message' | 'embed' | 'image'

export interface MessageBlock {
  id: string
  type: MessageBlockType
  data: {
    authorId?: string
    content?: string
    embed?: Embed
    imageUrl?: string
    reply?: Reply
    edited?: boolean
  }
}

export interface ComposedMessage {
  id: string
  blocks: MessageBlock[]
  timestamp: Date
}
