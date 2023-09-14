import s from './table.module.scss'

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
      <tbody>
        {/*{data.map(item => (*/}
        {/*  <tr key={item.title}>*/}
        {/*    <td>{item.title}</td>*/}
        {/*    <td>{item.cardsCount}</td>*/}
        {/*    <td>{item.updated}</td>*/}
        {/*    <td>{item.createdBy}</td>*/}
        {/*    <td>icons...</td>*/}
        {/*  </tr>*/}
        {/*))}*/}
        <tr className={s.tableRow}>
          <td>title</td>
          <td>cardsCount</td>
          <td>updated</td>
          <td>createdBy</td>
          <td>icons...</td>
        </tr>
        <tr>
          <td>title</td>
          <td>cardsCount</td>
          <td>updated</td>
          <td>createdBy</td>
          <td>icons...</td>
        </tr>
      </tbody>
    </table>
  )
}
