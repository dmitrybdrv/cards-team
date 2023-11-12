import { CardModalVariant } from '@/services/cards/cards.types.ts'

export const cardsGetModalTitles = (
  modalVariant: CardModalVariant
): { title: string; buttonTitle: string } => {
  const result = {
    title: '',
    buttonTitle: '',
  }

  switch (modalVariant) {
    case 'createCard':
      result.title = 'Add New Card'
      result.buttonTitle = 'Add Card'
      break
    case 'updateCard':
      result.title = 'Edit card'
      result.buttonTitle = 'Save Changes'
      break
    case 'deleteCard':
      result.title = 'Delete card'
      result.buttonTitle = 'Delete'
      break
  }

  return result
}
