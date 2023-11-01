import { useCallback, useState } from 'react'

import { CardModalVariant, CurrentCardData } from '@/services/cards/cards.types.ts'

export const useCardModalState = () => {
  const [modalCardVariant, setModalCardVariant] = useState<CardModalVariant>(null)
  const [currentCardData, setCurrentCardData] = useState<CurrentCardData>({
    id: null,
    question: '',
    answer: '',
    questionImg: '',
    answerImg: '',
    questionVideo: '',
    answerVideo: '',
  })
  const [isOpenCardModal, setIsOpenCardModal] = useState(false)

  const onClickAddCard = useCallback(() => {
    setIsOpenCardModal(true)
    setModalCardVariant('createCard')
  }, [])

  const onClickEditOrDeleteCard = useCallback(
    (params: CurrentCardData, variant: CardModalVariant) => {
      setIsOpenCardModal(true)
      setCurrentCardData(params)
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
