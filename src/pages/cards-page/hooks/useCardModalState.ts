import { useCallback, useState } from 'react'

export type CardModalVariant = 'createCard' | 'updateCard' | 'deleteCard' | null
export type CurrentCardData = {
  id: string | null
  name: string | null
}

//test - conflicts

export const useCardModalState = () => {
  const [modalCardVariant, setModalCardVariant] = useState<CardModalVariant>(null)
  const [currentCardData, setCurrentCardData] = useState<CurrentCardData>({
    id: null,
    name: null,
  })
  const [isOpenCardModal, setIsOpenCardModal] = useState(false)
  const onClickAddCard = useCallback(() => {
    setIsOpenCardModal(true)
    setModalCardVariant('createCard')
  }, [])

  const onClickEditOrDeleteCard = useCallback(
    (id: string, name: string, variant: CardModalVariant) => {
      setIsOpenCardModal(true)
      setCurrentCardData({ id, name })
      setModalCardVariant(variant)
    },
    []
  )

  return {
    modalCardVariant,
    currentCardData,
    isOpenCardModal,
    onClickAddCard,
    onClickEditOrDeleteCard,
    setIsOpenCardModal,
  }
}
