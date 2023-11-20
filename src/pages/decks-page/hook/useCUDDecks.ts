import { UseFormReset } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'

import { useToast } from '@/common/utils/toast.ts'
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

  //notification toasts
  const { showToast } = useToast()

  // prepare for redirect if deck remove from cardsPage
  const location = useLocation()
  const navigate = useNavigate()
  const isCardsPage = location.pathname.includes('deck')

  //Call backs
  const createDeck = (data: CreateDeckArgs) => {
    createDeckQuery(data)
      .unwrap()
      .then(_res => {
        reset({ name: '' })
        showToast(`Deck - ${_res.name} is created 😀 !!!`, 'success')
      })
      .catch(error => {
        console.log(error)
        showToast(`Some error occurred`, 'error')
      })
    setIsOpenModal(false)
  }
  const updateDeck = (data: CreateDeckArgs) => {
    currentDeckData.id &&
      updateDeckQuery({ id: currentDeckData.id, ...data })
        .unwrap()
        .then(() => {
          showToast(`${currentDeckData.name} has been changed 🔨`, 'success')
        })
        .catch(error => {
          console.log(error)
          showToast(`Some error occurred`, 'error')
        })
    setIsOpenModal(false)
  }
  const deleteDeck = () => {
    setIsOpenModal(false)
    if (currentDeckData.id) {
      if (isCardsPage) {
        navigate('/')
      }

      deleteDeckQuery({ id: currentDeckData.id })
        .unwrap()
        .then(res => {
          showToast(`${res.name} deck has been deleted 💀`, 'success')
        })
        .catch(error => {
          console.log(error)
          showToast(`Some error occurred`, 'error')
        })
    }
  }

  return {
    createDeck,
    updateDeck,
    deleteDeck,
    isLoading,
    error,
  }
}
