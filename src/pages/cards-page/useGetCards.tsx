import { useCallback, useState } from 'react'

import { useParams } from 'react-router-dom'

import { debounce } from '@/common/utils/debounce.ts'
import { Sort } from '@/components'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks.ts'
import { useGetUserCardsQuery } from '@/services/deck/cards.service.ts'
import { CardsParams, CardsResponse } from '@/services/deck/cards.types.ts'
import { friendsPackSlice } from '@/store/friends-pack.slice.ts'

export const useGetCards = () => {
  const dispatch = useAppDispatch()
  const { deckId } = useParams()
  const [searchValue, setSearchValue] = useState('')
  const [sort, setSort] = useState<Sort>({ orderName: null, direction: null })

  const currentPage = useAppSelector(state => state.friendsPack.currentPage)
  const itemsPerPage = useAppSelector(state => state.friendsPack.itemPerPage)

  const onChangeSearchInput = debounce((searchValue: string) => {
    setSearchValue(searchValue)
    dispatch(friendsPackSlice.actions.setCurrentPage(1))
  }, 1000)

  const onChangeItemsPerPage = (itemsPerPage: number) => {
    dispatch(friendsPackSlice.actions.setItemPerPage(itemsPerPage))
    dispatch(friendsPackSlice.actions.setCurrentPage(1))
  }

  // prepare params for decks query
  const queryParams: CardsParams = {
    id: deckId,
    question: searchValue,
    currentPage,
    itemsPerPage,
  }

  const { data, isLoading, isSuccess, isError, isFetching } = useGetUserCardsQuery(queryParams)

  const initialData: CardsResponse = {
    items: [],
    pagination: {
      currentPage: 1,
      itemsPerPage: 10,
      totalItems: 0,
      totalPages: 0,
    },
  }

  const onChangeSearchInputMemo = useCallback(onChangeSearchInput, [])
  const setCurrentPageMemo = useCallback(
    (currentPage: number) => dispatch(friendsPackSlice.actions.setCurrentPage(currentPage)),
    []
  )
  const setItemsPerPageMemo = useCallback(onChangeItemsPerPage, [])
  const setSortMemo = useCallback(setSort, [])

  return {
    isFetching,
    isError,
    deckData: data || initialData,
    isLoadingDecksData: isLoading,
    isHasDecksData: isSuccess,
    sort,
    setSortMemo,
    onChangeSearchInputMemo,
    setCurrentPageMemo,
    setItemsPerPageMemo,
  }
}
