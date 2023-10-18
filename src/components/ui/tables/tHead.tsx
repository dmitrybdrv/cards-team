import { ComponentPropsWithoutRef, Dispatch, FC, memo } from 'react'

import s from './table.module.scss'

type Props = ComponentPropsWithoutRef<'thead'> & {
  columns: TableColumns<any>
  onSort: Dispatch<Sort>
  sort: Sort
}

export type Sort = {
  orderName: string | null
  direction: 'asc' | 'desc' | null
}

export type TableColumns<T> = {
  title: string
  orderName?: T
}[]

export const THead: FC<Omit<Props, 'children'>> = memo(
  ({ columns, onSort, sort, className, ...rest }) => {
    const getNewDirection = (direction: 'asc' | 'desc' | null) => {
      switch (direction) {
        case null:
          return 'asc'
        case 'asc':
          return 'desc'
        case 'desc':
          return null
      }
    }
    const columnsView = columns.map(({ title, orderName }, i) => {
      const onClick = () => {
        orderName && onSort({ orderName, direction: getNewDirection(sort.direction) })
      }

      return (
        <th key={i} onClick={onClick}>
          {title}
        </th>
      )
    })

    return (
      <thead {...rest} className={className}>
        <tr className={s.tableHead}>{columnsView}</tr>
      </thead>
    )
  }
)
