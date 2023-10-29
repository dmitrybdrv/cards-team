export type CardsResponse = {
  items: CardsResponseItems[]
  pagination: CardsResponsePagination
}
export type CardsResponseItems = {
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
  grade: number
  moreId?: any
  created: string
  updated: string
}
export type CardsResponsePagination = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}

export type CardsParams = {
  id: string | undefined
  name?: string
  question: string
  answer?: string
  orderBy?: string
  currentPage?: number
  itemsPerPage?: number
  questionVideo?: string
  answerVideo?: string
}

export type friendsOrderName = 'question' | 'answer' | 'updated' | 'grade'
