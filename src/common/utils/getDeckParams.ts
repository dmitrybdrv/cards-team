// prepare params for decks query
import { InitialDeck } from '@/services/decks/decks.slice.ts'
import { DecksParams } from '@/services/decks/decks.types.ts'
/**

 Возвращает параметры для запроса колоды, исключаяя поля с null
 @param {InitialDeck} decksState - Объект, содержащий состояние колоды.
 @returns {DecksParams} queryParams - Параметры для запроса колоды. */

export const getDeckParams = (decksState: InitialDeck): DecksParams => {
  const { name, authorId, minCardsCount, maxCardsCount, currentPage, itemsPerPage, orderBy } =
    decksState

  const queryParams: DecksParams = {
    currentPage,
    itemsPerPage,
    name,
    minCardsCount,
  }

  if (authorId) queryParams.authorId = authorId
  if (maxCardsCount) queryParams.maxCardsCount = maxCardsCount
  if (orderBy) queryParams.orderBy = orderBy

  return queryParams
}
