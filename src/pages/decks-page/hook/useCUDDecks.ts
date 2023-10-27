import { UseFormReset } from 'react-hook-form'

import { CurrentDeckData } from '@/pages/decks-page/hook/useDeckModalState.ts'
import {
  useCreateDeckMutation,
  useDeleteDecksMutation,
  useUpdateDecksMutation,
} from '@/services/decks/decks.service.ts'
import { CreateDeckArgs } from '@/services/decks/decks.types.ts'

export const useCUDDecks = (
  currentDeckData: CurrentDeckData,
  setIsOpenModal: (isOpen: boolean) => void,
  reset: UseFormReset<CreateDeckArgs>
) => {
  const [createDeckQuery, { isLoading: isLoadingCreate, error: errorCreate }] =
    useCreateDeckMutation()
  const [deleteDeckQuery, { isLoading: isLoadingDelete, error: errorDelete }] =
    useDeleteDecksMutation()
  const [updateDeckQuery, { isLoading: isLoadingUpdate, error: errorUpdate }] =
    useUpdateDecksMutation()

  //status
  const isLoading = isLoadingCreate || isLoadingDelete || isLoadingUpdate
  const error = errorCreate || errorDelete || errorUpdate

  //Call backs
  const createDeck = (data: CreateDeckArgs) => {
    createDeckQuery(data)
      .unwrap()
      .then(_res => {
        setIsOpenModal(false)
        reset({ name: '' })
      })
  }
  const updateDeck = (data: CreateDeckArgs) => {
    currentDeckData.id &&
      updateDeckQuery({ id: currentDeckData.id, ...data })
        .unwrap()
        .then(_res => {
          setIsOpenModal(false)
        })
  }

  const deleteDeck = () => {
    setIsOpenModal(false)
    currentDeckData.id && deleteDeckQuery({ id: currentDeckData.id })
  }

  return {
    createDeck,
    updateDeck,
    deleteDeck,
    isLoading,
    error,
  }
}
