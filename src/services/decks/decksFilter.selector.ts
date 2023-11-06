import { RootState } from '@/hooks/hooks.ts'

export const decksFilterSelector = (state: RootState) => {
  const { name, minCardsCount, maxCardsCount, ...rest } = state.decks

  return rest
}

export const decksDebounceFilterSelector = (state: RootState) => {
  const { currentPage, itemsPerPage, switcherValue, orderBy, ...rest } = state.decks

  return rest
}
