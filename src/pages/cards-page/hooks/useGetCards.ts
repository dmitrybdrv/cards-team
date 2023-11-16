import { useCallback, useState } from 'react'

import { useParams } from 'react-router-dom'

import { Sort } from '@/components'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks.ts'
import { useGetMeQuery } from '@/services/auth/auth.service.ts'
import { useGetUserCardsQuery } from '@/services/cards/cards.service.ts'
import { CardsParams, CardsResponse } from '@/services/cards/cards.types.ts'
import { changeOrderBy, setCurrentPage, setItemPerPage } from '@/store/cards.slice.ts'

export const useGetCards = () => {
  const dispatch = useAppDispatch()
  const { deckId } = useParams()

  // const [searchValue, setSearchValue] = useState('')
  //
  // const onChangeSearchInputMemo = useCallback((e: ChangeEvent<HTMLInputElement>) => {
  //   setSearchValue(e.currentTarget.value)
  //   onChangeSearchInput(e.currentTarget.value)
  // }, [])

  const currentPage = useAppSelector(state => state.cards.currentPage)
  const itemsPerPage = useAppSelector(state => state.cards.itemPerPage)

  const { data: profileData } = useGetMeQuery()

  //-----for pagination--------
  const setItemsPerPageMemo = useCallback((itemsPerPage: number) => {
    dispatch(setItemPerPage(itemsPerPage))
  }, [])
  const setCurrentPageMemo = useCallback(
    (currentPage: number) => dispatch(setCurrentPage(currentPage)),
    []
  )

  //------for sort------------
  const [sort, setSort] = useState<Sort>({ orderName: null, direction: null })
  const setSortMemo = useCallback((sort: Sort) => {
    setSort(sort)
    const sortData = sort.direction ? `${sort.orderName}-${sort.direction}` : null

    dispatch(changeOrderBy(sortData))
  }, [])

  const searchValue = useAppSelector(state => state.cards.name)
  const orderBy = useAppSelector(state => state.cards.orderBy)

  // prepare params for decks query
  const queryParams: CardsParams = {
    id: deckId,
    question: searchValue,
    currentPage,
    itemsPerPage,
  }

  if (orderBy) queryParams.orderBy = orderBy

  // fix watch new hook - search dispatch  value and value take from redux
  // the same flow you should do with sort
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

  return {
    isFetching,
    isError,
    cardData: data || initialData,
    isLoadingDecksData: isLoading,
    isHasDecksData: isSuccess,
    sort,
    setSortMemo,
    // onChangeSearchInputMemo,
    setCurrentPageMemo,
    setItemsPerPageMemo,
    profileData,
  }
}
