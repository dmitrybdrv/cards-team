import { UseFormReset } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'

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
      })
    setIsOpenModal(false)
  }
  const updateDeck = (data: CreateDeckArgs) => {
    currentDeckData.id && updateDeckQuery({ id: currentDeckData.id, ...data })
    setIsOpenModal(false)
  }
  const deleteDeck = () => {
    setIsOpenModal(false)
    currentDeckData.id && deleteDeckQuery({ id: currentDeckData.id })
    if (isCardsPage) {
      navigate('/')
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
