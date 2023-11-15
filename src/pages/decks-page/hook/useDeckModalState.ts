import { useCallback, useState } from 'react'

export type ModalVariant = 'createDeck' | 'updateDeck' | 'deleteDeck' | null
export type CurrentDeckData = {
  id: string | null
  name: string | null
  isPrivate: boolean
  cover: string | null
}

// test-conflicts
// test-test

export const useDeckModalState = () => {
  const [modalVariant, setModalVariant] = useState<ModalVariant>(null)
  const [currentDeckData, setCurrentDeckData] = useState<CurrentDeckData>({
    id: null,
    name: null,
    isPrivate: false,
    cover: null,
  })
  const [isOpenModal, setIsOpenModal] = useState(false)
  const onClickAddDeck = useCallback(() => {
    setIsOpenModal(true)
    setModalVariant('createDeck')
  }, [])
  const onClickEditOrDeleteDeck = useCallback(
    (deckData: CurrentDeckData, variant: ModalVariant) => {
      setIsOpenModal(true)
      setCurrentDeckData(deckData)
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
