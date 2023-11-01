import { useCallback, useState } from 'react'

export type CardModalVariant = 'createCard' | 'updateCard' | 'deleteCard' | null
export type CurrentCardData = {
  id: string | null
  name: string | null
  isPrivate: boolean
}

//test - conflicts

export const useCardModalState = () => {
  const [modalCardVariant, setModalCardVariant] = useState<CardModalVariant>(null)
  const [currentCardData, setCurrentCardData] = useState<CurrentCardData>({
    id: null,
    name: null,
    isPrivate: false,
  })
  const [isOpenCardModal, setIsOpenCardModal] = useState(false)
  const onClickAddCard = useCallback(() => {
    setIsOpenCardModal(true)
    setModalCardVariant('createCard')
  }, [])

  const onClickEditOrDeleteCard = useCallback(
    (id: string, name: string, isPrivate: boolean, variant: CardModalVariant) => {
      setIsOpenCardModal(true)
      setCurrentCardData({ id, name, isPrivate })
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
