import { useCallback, useState } from 'react'

export type ModalVariant = 'createDeck' | 'updateDeck' | 'deleteDeck' | null
export type CurrentDeckData = {
  id: string | null
  name: string | null
  isPrivate: boolean
}

// test-conflicts
// test-test

export const useDeckModalState = () => {
  const [modalVariant, setModalVariant] = useState<ModalVariant>(null)
  const [currentDeckData, setCurrentDeckData] = useState<CurrentDeckData>({
    id: null,
    name: null,
    isPrivate: false,
  })
  const [isOpenModal, setIsOpenModal] = useState(false)
  const onClickAddDeck = useCallback(() => {
    setIsOpenModal(true)
    setModalVariant('createDeck')
  }, [])
  const onClickEditOrDeleteDeck = useCallback(
    (id: string, name: string, isPrivate: boolean, variant: ModalVariant) => {
      setIsOpenModal(true)
      setCurrentDeckData({ id, name, isPrivate })
      setModalVariant(variant)
    },
    []
  )

  return {
    modalVariant,
    currentDeckData,
    isOpenModal,
    onClickAddDeck,
    onClickEditOrDeleteDeck,
    setIsOpenModal,
  }
}
