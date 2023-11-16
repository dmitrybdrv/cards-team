import { ComponentPropsWithoutRef, Dispatch, FC, memo } from 'react'

import { clsx } from 'clsx'

import s from './table.module.scss'

import { showDirection, getNewSortDirection } from '@/common/utils'

type Props = ComponentPropsWithoutRef<'thead'> & {
  columns: TableColumns<string>
  onSort: Dispatch<Sort>
  currentSort: Sort
  disabled?: boolean
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

// sort logic fix

export const THead: FC<Omit<Props, 'children'>> = memo(
  ({ disabled, columns, onSort, currentSort, className, ...rest }) => {
    const columnsRender = columns.map(({ title, orderName }, i) => {
      const isSortColumn = currentSort.orderName === orderName
      const currentDirection = isSortColumn ? currentSort.direction : null

      const onClick = () => {
        orderName &&
          !disabled &&
          onSort({
            orderName,
            direction: getNewSortDirection(currentDirection),
          })
      }

      const thStyle = clsx(orderName && s.sortingColumn, disabled && s.disabledColumn)

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
