import {UseFormReset} from 'react-hook-form'
import {CreateCardArgs} from "@/services/cards/cards.types.ts";
import {CurrentCardData} from "@/pages/cards-page/hooks/useCardModalState.ts";

export const useCUDCards = (
  currentCardData: CurrentCardData,
  setIsOpenModal: (isOpen: boolean) => void,
  reset: UseFormReset<CreateCardArgs>
) => {
  const [createCardQuery, { isLoading: isLoadingCreate, error: errorCreate }] =
    // useCreateDeckMutation()
  const [deleteCardQuery, { isLoading: isLoadingDelete, error: errorDelete }] =
    // useDeleteDecksMutation()
  const [updateCardQuery, { isLoading: isLoadingUpdate, error: errorUpdate }] =
    // useUpdateDecksMutation()

  //status
  const isLoading = isLoadingCreate || isLoadingDelete || isLoadingUpdate
  const error = errorCreate || errorDelete || errorUpdate

  //Call backs
  const createCard = (data: CreateCardArgs) => {
    createCardQuery(data)
      .unwrap()
      .then(_res => {
        setIsOpenModal(false)
        reset({ name: '' })
      })
  }
  const updateCard = (data: CreateCardArgs) => {
    currentCardData.id &&
      updateCardQuery({ id: currentCardData.id, ...data })
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
