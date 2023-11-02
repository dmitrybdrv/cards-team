import { UseFormReset } from 'react-hook-form'

import { useCreateCardMutation } from '@/services/cards/cards.service.ts'
import { CreateCardArgs, CurrentCardData } from '@/services/cards/cards.types.ts'
import { useDeleteDecksMutation, useUpdateDecksMutation } from '@/services/decks/decks.service.ts'

export const useCUDCards = (
  currentCardData: CurrentCardData,
  setIsOpenModal: (isOpen: boolean) => void,
  reset: UseFormReset<CreateCardArgs>,
  packId: string
) => {
  const [createCardQuery, { isLoading: isLoadingCreate, error: errorCreate }] =
    useCreateCardMutation()
  const [deleteCardQuery, { isLoading: isLoadingDelete, error: errorDelete }] =
    useDeleteDecksMutation()
  const [updateCardQuery, { isLoading: isLoadingUpdate, error: errorUpdate }] =
    useUpdateDecksMutation()

  //status
  const isLoading = isLoadingCreate || isLoadingDelete || isLoadingUpdate
  const error = errorCreate || errorDelete || errorUpdate

  //Call backs
  const createCard = (data: any) => {
    createCardQuery({ id: packId, ...data })
      .unwrap()
      .then(_res => {
        setIsOpenModal(false)
        reset({
          question: '',
          answer: '',
          answerImg: '',
          questionImg: '',
          questionVideo: '',
          answerVideo: '',
        })
      })
  }
  const updateCard = (data: any) => {
    currentCardData.id &&
      updateCardQuery(data)
        .unwrap()
        .then(_res => {
          setIsOpenModal(false)
        })
  }

  const deleteCard = () => {
    setIsOpenModal(false)
    currentCardData.id && deleteCardQuery({ id: currentCardData.id })
  }

  return {
    createCard,
    updateCard,
    deleteCard,
    isLoading,
    error,
  }
}
