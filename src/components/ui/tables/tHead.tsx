import { ComponentPropsWithoutRef, Dispatch, FC, memo } from 'react'

import { clsx } from 'clsx'

import s from './table.module.scss'

import { showDirection, getNewSortDirection } from '@/common/utils'

type Props = ComponentPropsWithoutRef<'thead'> & {
  columns: TableColumns<any>
  onSort: Dispatch<Sort>
  currentSort: Sort
}

export type TableColumns<T> = {
  title: string
  orderName?: T
}[]

export type SortDirection = 'asc' | 'desc' | null

export type Sort = {
  orderName: string | null
  direction: SortDirection
}

export const THead: FC<Omit<Props, 'children'>> = memo(
  ({ columns, onSort, currentSort, className, ...rest }) => {
    const columnsRender = columns.map(({ title, orderName }, i) => {
      const isSortColumn = currentSort.orderName === orderName
      const currentDirection = isSortColumn ? currentSort.direction : null

      const onClick = () => {
        orderName &&
          onSort({
            orderName,
            direction: getNewSortDirection(currentDirection),
          })
      }

      const thStyle = clsx(orderName && s.sortingColumn)

      return (
        <th key={i} onClick={onClick} className={thStyle}>
          {title} {isSortColumn && showDirection(currentDirection)}
        </th>
      )
    })

    return (
      <thead {...rest} className={className}>
        <tr className={s.tableHead}>{columnsRender}</tr>
      </thead>
    )
  }
)
