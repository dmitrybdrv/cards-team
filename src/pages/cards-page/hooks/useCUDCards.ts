import { UseFormReset } from 'react-hook-form'

import { useToast } from '@/common/utils/toast.ts'
import {
  useCreateCardMutation,
  useDeleteCardMutation,
  useUpdateCardMutation,
} from '@/services/cards/cards.service.ts'
import { CardFormData, CurrentCardData } from '@/services/cards/cards.types.ts'

export const useCUDCards = (
  currentCardData: CurrentCardData,
  setIsOpenModal: (isOpen: boolean) => void,
  setFieldsVariant: (variant: string) => void,
  reset: UseFormReset<CardFormData>,
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

  //notification toasts
  const { showToast } = useToast()

  //Call backs
  const createCard = (data: CardFormData) => {
    createCardQuery({ ...data, id: packId })
      .unwrap()
      .then(_res => {
        setIsOpenModal(false)
        reset({
          question: '',
          answer: '',
          answerImg: '',
          questionImg: '',
        })
        showToast(`New card created 💡`, 'success')
      })
      .catch(() => showToast('Something goes wrong', 'error'))
      .finally(() => setFieldsVariant('Text'))
  }
  const updateCard = (data: CardFormData) => {
    updateCardQuery({ ...data, id: currentCardData.id })
      .unwrap()
      .then(() => {
        setIsOpenModal(false)
        showToast(`Card has been changed 👍`, 'success')
      })
      .catch(() => showToast(`Something goes wrong`, 'error'))
      .finally(() => setFieldsVariant('Text'))
  }
  const deleteCard = () => {
    const id =
      currentCardData?.id !== undefined && currentCardData?.id !== null ? currentCardData.id : ''

    deleteCardQuery(id)
      .unwrap()
      .then(() => {
        showToast(`Card deleted 💥`, 'success')
      })
      .catch(res => showToast(`${res.error}`, 'error'))
    setIsOpenModal(false)
    reset({
      question: '',
      answer: '',
      answerImg: '',
      questionImg: '',
    })
  }

  return {
    createCard,
    updateCard,
    deleteCard,
    isLoading,
    error,
  }
}
