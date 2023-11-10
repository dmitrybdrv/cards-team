import { createSelector } from 'reselect'

import { RootState } from '@/hooks/hooks.ts'

export const decksFilterSelector = createSelector(
  (state: RootState) => state.decks,
  decks => {
    const { name, minCardsCount, maxCardsCount, ...rest } = decks

    return rest
  }
)

export const decksDebounceFilterSelector = createSelector(
  (state: RootState) => state.decks,
  decks => {
    const { currentPage, itemsPerPage, switcherValue, orderBy, ...rest } = decks

    return rest
  }
)
