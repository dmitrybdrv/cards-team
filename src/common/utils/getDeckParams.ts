import { tabSwitcherValue } from '@/pages/decks-page'
import { useGetMeQuery } from '@/services/auth/auth.service.ts'
import { InitialDeck } from '@/services/decks/decks.slice.ts'
import { DecksParams } from '@/services/decks/decks.types.ts'

/**

 Возвращает параметры для запроса колоды, исключаяя поля с null
 @param {InitialDeck} decksState - Объект, содержащий состояние колоды.
 @returns {DecksParams} queryParams - Параметры для запроса колоды. */

export const getDeckParams = (decksState: InitialDeck): DecksParams => {
  const { name, switcherValue, minCardsCount, maxCardsCount, currentPage, itemsPerPage, orderBy} =
    decksState
  const {
    data: { id },
  } = useGetMeQuery()
  const queryParams: DecksParams = {
    currentPage,
    itemsPerPage,
    name,
    minCardsCount,
  }

  if (switcherValue === tabSwitcherValue[0].value && id) queryParams.authorId = id
  if (maxCardsCount) queryParams.maxCardsCount = maxCardsCount
  if (orderBy) queryParams.orderBy = orderBy

  return queryParams
}
