export type DecksResponse = {
  maxCardsCount: number
  pagination: DecksResponsePagination
  items: DecksResponseItems[]
}
export type DecksResponsePagination = {
  totalPages: number
  currentPage: number
  itemsPerPage: number
  totalItems: number
}
export type DecksResponseItemsAuthor = {
  id: string
  name: string
}
export type DecksResponseItems = {
  id: string
  userId: string
  name: string
  isPrivate: boolean
  shots: number
  cover: string | null
  rating: number
  isDeleted?: boolean | null
  isBlocked?: boolean | null
  created: string
  updated: string
  cardsCount: number
  author: DecksResponseItemsAuthor
}
export type DecksOrderName = 'updated' | 'created' | 'name' | 'cardsCount'

export type DecksParams = {
  minCardsCount?: string
  maxCardsCount?: string
  name?: string
  authorId?: string
  orderBy?: string
  currentPage?: number
  itemsPerPage?: number
} | void
