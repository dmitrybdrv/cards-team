import { tabSwitcherValue } from '@/pages/decks-page'
import { DecksParams } from '@/services/decks/decks.types.ts'
import { InitialDeck } from '@/store/decks.slice.ts'

/**

 Возвращает параметры для запроса колоды, исключаяя поля с null
 @param {InitialDeck} decksState - Объект, содержащий состояние колоды.
 @returns {DecksParams} queryParams - Параметры для запроса колоды. */

export const getDeckParams = (decksState: InitialDeck): DecksParams => {
  const {
    name,
    switcherValue,
    minCardsCount,
    maxCardsCount,
    currentPage,
    itemsPerPage,
    orderBy,
    userId,
  } = decksState

  const queryParams: DecksParams = {
    currentPage,
    itemsPerPage,
    name,
    minCardsCount,
  }

  if (switcherValue === tabSwitcherValue[0].value && userId) queryParams.authorId = userId
  if (maxCardsCount) queryParams.maxCardsCount = maxCardsCount
  if (orderBy.direction) queryParams.orderBy = `${orderBy.orderName}-${orderBy.direction}`

  return queryParams
}
