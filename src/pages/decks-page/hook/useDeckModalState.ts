import { useCallback, useState } from 'react'

export type ModalVariant = 'createDeck' | 'updateDeck' | 'deleteDeck' | null
export type CurrentDeckData = {
  id: string | null
  name: string | null
}

// test-conflicts
// test-test

export const useDeckModalState = () => {
  const [modalVariant, setModalVariant] = useState<ModalVariant>(null)
  const [currentDeckData, setCurrentDeckData] = useState<CurrentDeckData>({ id: null, name: null })
  const [isOpenModal, setIsOpenModal] = useState(false)
  const onClickAddDeck = useCallback(() => {
    setIsOpenModal(true)
    setModalVariant('createDeck')
  }, [])
  const onClickEditOrDeleteDeck = useCallback((id: string, name: string, variant: ModalVariant) => {
    setIsOpenModal(true)
    setCurrentDeckData({ id, name })
    setModalVariant(variant)
  }, [])

  return {
    modalVariant,
    currentDeckData,
    isOpenModal,
    onClickAddDeck,
    onClickEditOrDeleteDeck,
    setIsOpenModal,
  }
}
