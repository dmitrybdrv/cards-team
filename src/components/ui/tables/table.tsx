import s from './table.module.scss'
import { TBody } from './TBody.tsx'

export const Table = ({}) => {
  return (
    <table className={s.table}>
      <thead>
        <tr className={s.tableHead}>
          <th>Name</th>
          <th>Cards</th>
          <th>Last Updated</th>
          <th>Created by</th>
          <th></th>
        </tr>
      </thead>
      <TBody />
    </table>
  )
}
