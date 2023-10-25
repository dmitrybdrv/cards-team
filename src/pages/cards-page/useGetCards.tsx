import { useCallback, useState } from 'react'

import { useParams } from 'react-router-dom'

import { debounce } from '@/common/utils/debounce.ts'
import { Sort } from '@/components'
import { useGetCardsQuery } from '@/services/deck/deck.service.ts'
import { DeckParams } from '@/services/deck/deck.types.ts'
import { DecksResponse } from '@/services/decks/decks.types.ts'

export const useGetCards = () => {
  const { deckId } = useParams()
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [searchValue, setSearchValue] = useState('')
  const [sort, setSort] = useState<Sort>({ orderName: null, direction: null })

  const onChangeSearchInput = debounce((searchValue: string) => {
    setSearchValue(searchValue)
    setCurrentPage(1)
  }, 1000)

  const onChangeItemsPerPage = (itemsPerPage: number) => {
    setItemsPerPage(itemsPerPage)
    setCurrentPage(1)
  }

  // prepare params for decks query
  const queryParams: DeckParams = {
    id: deckId,
    question: searchValue,
    currentPage,
    itemsPerPage,
  }

  // if (sort.direction) queryParams.orderBy = `${sort.orderName}-${sort.direction}`

  const { data, isLoading, isSuccess, isError, isFetching } = useGetCardsQuery(queryParams)

  const initialData: DecksResponse = {
    items: [],
    maxCardsCount: 100,
    pagination: {
      currentPage: 1,
      itemsPerPage: 10,
      totalItems: 0,
      totalPages: 0,
    },
  }
  const onChangeSearchInputMemo = useCallback(onChangeSearchInput, [])
  const setCurrentPageMemo = useCallback(setCurrentPage, [])
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
