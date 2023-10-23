import { CurrentDeckData } from '@/pages/decks-page/hook/useDeckModalState.ts'
import {
  useCreateDeckMutation,
  useDeleteDecksMutation,
  useUpdateDecksMutation,
} from '@/services/decks/decks.service.ts'
import { CreateDeckArgs } from '@/services/decks/decks.types.ts'

export const useCUDDecks = (currentDeckData: CurrentDeckData) => {
  const [
    createDeck,
    { isSuccess: isSuccessCreate, isLoading: isLoadingCreate, error: errorCreate },
  ] = useCreateDeckMutation()
  const [
    deleteDeck,
    { isSuccess: isSuccessDelete, isLoading: isLoadingDelete, error: errorDelete },
  ] = useDeleteDecksMutation()
  const [
    updateDeck,
    { isSuccess: isSuccessUpdate, isLoading: isLoadingUpdate, error: errorUpdate },
  ] = useUpdateDecksMutation()
  const isSuccess = isSuccessCreate || isSuccessDelete || isSuccessUpdate
  const isLoading = isLoadingCreate || isLoadingDelete || isLoadingUpdate
  const error = errorCreate || errorDelete || errorUpdate
  const deleteHandler = () => currentDeckData.id && deleteDeck({ id: currentDeckData.id })
  const updateHandler = (data: CreateDeckArgs) =>
    currentDeckData.id && updateDeck({ id: currentDeckData.id, ...data })

  return {
    createDeck,
    updateHandler,
    deleteHandler,
    isSuccess,
    isLoading,
    error,
  }
}
