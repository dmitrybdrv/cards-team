import { Table, TdIcons, TdRating } from './components/ui'
import s from './components/ui/tables/table.module.scss'

export function App() {
  return (
    <div>
      Packs list without cover
      <Table variant={'packs'}>
        <thead>
          <tr className={s.tableHead}>
            <th>Name</th>
            <th>Cards</th>
            <th>Last Updated</th>
            <th>Created by</th>
            <th></th>
          </tr>
        </thead>
        <tr className={s.tableRow}>
          <td>title</td>
          <td>cardsCount</td>
          <td>updated</td>
          <td>createdBy</td>
          <TdIcons
            onPlay={() => console.log('play')}
            onEdit={() => console.log('edit')}
            onDelete={() => console.log('delete')}
          />
        </tr>
      </Table>
      {/*TODO Packs list with cover*/}
      <br />
      <br />
      My pack
      <Table variant={'cards'}>
        <thead>
          <tr className={s.tableHead}>
            {/*TODO Q and A need width 300px*/}
            <th>Question</th>
            <th>Answer</th>
            <th>Last Updated</th>
            <th>Grade</th>
            <th></th>
          </tr>
        </thead>
        <tr>
          <td>title</td>
          <td>cardsCount</td>
          <td>updated</td>
          <TdRating rating={4} />
          <TdIcons onEdit={() => console.log('edit')} onDelete={() => console.log('delete')} />
        </tr>
        <tr>
          <td>title</td>
          <td>cardsCount</td>
          <td>updated</td>
          <TdRating rating={4} />
          <TdIcons onEdit={() => console.log('edit')} onDelete={() => console.log('delete')} />
        </tr>
      </Table>
      {/*TODO friends pack*/}
    </div>
  )
}
