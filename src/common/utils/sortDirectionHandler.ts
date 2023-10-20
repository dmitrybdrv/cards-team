import { SortDirection } from '@/components'

export const getNewSortDirection = (direction: SortDirection) => {
  switch (direction) {
    case null:
      return 'asc'
    case 'asc':
      return 'desc'
    case 'desc':
      return null
  }
}
export const showDirection = (direction: SortDirection) => {
  let icon: string | null = null

  switch (direction) {
    case null:
      icon = null
      break
    case 'asc':
      icon = '▲'
      break
    case 'desc':
      icon = '▼'
      break
  }

  return icon
}
