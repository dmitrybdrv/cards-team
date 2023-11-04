import { UseFormReset } from 'react-hook-form'

import {
  useCreateCardMutation,
  useDeleteCardMutation,
  useUpdateCardMutation,
} from '@/services/cards/cards.service.ts'
import { CreateCardArgs, CurrentCardData } from '@/services/cards/cards.types.ts'

export const useCUDCards = (
  currentCardData: CurrentCardData,
  setIsOpenModal: (isOpen: boolean) => void,
  reset: UseFormReset<CreateCardArgs>,
  packId: string
) => {
  const [createCardQuery, { isLoading: isLoadingCreate, error: errorCreate }] =
    useCreateCardMutation()
  const [deleteCardQuery, { isLoading: isLoadingDelete, error: errorDelete }] =
    useDeleteCardMutation()
  const [updateCardQuery, { isLoading: isLoadingUpdate, error: errorUpdate }] =
    useUpdateCardMutation()

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
    updateCardQuery({ id: currentCardData.id, ...data })
      .unwrap()
      .then(_res => {
        setIsOpenModal(false)
      })
  }
  const deleteCard = () => {
    deleteCardQuery(currentCardData.id)
    setIsOpenModal(false)
  }

  return {
    createCard,
    updateCard,
    deleteCard,
    isLoading,
    error,
  }
}
