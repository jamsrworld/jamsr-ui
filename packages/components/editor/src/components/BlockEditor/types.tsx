import { Content, JSONContent } from '@tiptap/core'

export interface TiptapProps {
  content?: Content
  onUpdate?: (data: JSONContent) => void
}

export type EditorUser = {
  clientId: string
  name: string
  color: string
  initials?: string
}
