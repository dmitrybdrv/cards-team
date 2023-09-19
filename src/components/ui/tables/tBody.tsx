import s from './table.module.scss'
import { TdIcons } from './tdIcons.tsx'
import { TdRating } from './tdRating.tsx'

export const TBody = ({}) => {
  return (
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
        <td>icons</td>
      </tr>
      <tr>
        <td>title</td>
        <td>cardsCount</td>
        <td>updated</td>
        <TdRating rating={4} />
        <TdIcons
          onPlay={() => console.log('play')}
          onEdit={() => console.log('edit')}
          onDelete={() => console.log('delete')}
        />
      </tr>
    </tbody>
  )
}
