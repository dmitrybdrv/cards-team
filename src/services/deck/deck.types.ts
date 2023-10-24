import { Params } from 'react-router-dom'

export type DeckResponse = {
  items: DeckResponseItems[]
  pagination: DeckResponsePagination
}
export type DeckResponseItems = {
  id: string
  deckId: string
  userId: string
  question: string
  answer: string
  shots: number
  questionImg?: any
  answerImg?: any
  answerVideo?: any
  questionVideo?: any
  comments?: any
  type?: any
  rating: number
  moreId?: any
  created: string
  updated: string
}
export type DeckResponsePagination = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}

export type DeckParams = {
  id?: string | undefined
  name?: string
  question?: string
  answer?: string
  orderBy?: string
  currentPage?: number
  itemsPerPage?: number
}
