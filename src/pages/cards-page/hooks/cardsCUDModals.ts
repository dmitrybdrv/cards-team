import { CurrentDeckData, ModalVariant } from '@/pages/decks-page/hook/useDeckModalState.ts'

export type ModalsProps = {
  isOpenModal: boolean
  setIsOpenModal: (isOpen: boolean) => void
  variant: ModalVariant
  currentCardData: CurrentDeckData
}
