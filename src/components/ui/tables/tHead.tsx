import { ComponentPropsWithoutRef, FC, memo } from 'react'

import s from './table.module.scss'

type Props = ComponentPropsWithoutRef<'thead'> & {
  columns: string[]
}

export const THead: FC<Omit<Props, 'children'>> = memo(({ columns, className, ...rest }) => {
  const columnsView = columns.map((el, i) => <th key={i}>{el}</th>)

  console.log('THead render ++++')

  return (
    <thead {...rest} className={className}>
      <tr className={s.tableHead}>{columnsView}</tr>
    </thead>
  )
})
