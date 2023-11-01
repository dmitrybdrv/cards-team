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
      result.title = 'Add New Deck'
      result.buttonTitle = 'Add New Deck'
      break
    case 'updateCard':
      result.title = 'Edit cards'
      result.buttonTitle = 'Save Changes'
      break
    case 'deleteCard':
      result.title = 'Delete cards'
      result.buttonTitle = 'Delete cards'
      break
  }

  return result
}
