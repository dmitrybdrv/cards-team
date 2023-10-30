import { ModalVariant } from '@/pages/decks-page/hook/useDeckModalState.ts'

export const getModalTitles = (
  modalVariant: ModalVariant
): { title: string; buttonTitle: string } => {
  const result = {
    title: '',
    buttonTitle: '',
  }

  switch (modalVariant) {
    case 'createDeck':
      result.title = 'Add New Deck'
      result.buttonTitle = 'Add New Deck'
      break
    case 'updateDeck':
      result.title = 'Edit cards'
      result.buttonTitle = 'Save Changes'
      break
    case 'deleteDeck':
      result.title = 'Delete cards'
      result.buttonTitle = 'Delete cards'
      break
  }

  return result
}
