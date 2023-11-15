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
  questionImg?: string
  answerImg?: string
  answerVideo?: string
  questionVideo?: string
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
  question?: string
  answer?: string
  orderBy?: string
  currentPage?: number
  itemsPerPage?: number
}
export type CardModalVariant = 'createCard' | 'updateCard' | 'deleteCard' | null

export type CurrentCardData = {
  id: string
  question: string
  answer: string
  questionImg?: string
  answerImg?: string
}

export type CardResponse = {
  id: string
  deckId: string
  userId: string
  question: string
  answer: string
  shots: number
  questionImg?: string
  answerImg?: string
  answerVideo?: string
  questionVideo?: string
  grade: number
  created: Date
  updated: Date
}

export type CardFormData = {
  question: string
  answer: string
  questionImg?: string | File
  answerImg?: string | File
}

export type CreateCardArgs = CardFormData & {
  id: string
}

export type friendsOrderName = 'question' | 'answer' | 'updated' | 'grade'

export type UpdateGradeCardArgs = {
  id: string
  cardId: string
  grade: number
}
