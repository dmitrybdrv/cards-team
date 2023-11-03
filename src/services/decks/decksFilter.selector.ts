import { RootState } from '@/hooks/hooks.ts'

export const decksFilterSelector = (state: RootState) => {
  const { name, minCardsCount, maxCardsCount, ...rest } = state.decks

  return rest
}

export const decksDebounceFilterSelector = (state: RootState) => {
  const { currentPage, itemsPerPage, authorId, orderBy, ...rest } = state.decks

  return rest
}
