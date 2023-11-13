import { CurrentCardData } from '@/services/cards/cards.types.ts'

export const toCardFormData = (body: CurrentCardData) => {
  const formData = new FormData()

  if (body.questionImg) formData.append('questionImg', body.questionImg)
  formData.append('question', body.question)

  if (body.answerImg) formData.append('answerImg', body.answerImg)
  formData.append('answer', body.answer)

  return formData
}
