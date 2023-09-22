import testImg from './assets/img/avatarPlaceholder.png'
import { Table, TdIcons, TdRating } from './components/ui'
import s from './components/ui/tables/table.module.scss'
import { TdCell } from './components/ui/tables/tdCell.tsx'

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
          <TdCell img={testImg}>
            {/*<TdCell>*/}
            title titletitletitletitletitletitletitle titletitle titletitletitle titletitletitle
            titletitletitle titletitletitletitletitletitle titletitletitle
          </TdCell>
          <TdCell>cardsCount</TdCell>
          <TdCell>updated</TdCell>
          <TdCell>createdBy</TdCell>
          <TdIcons
            onPlay={() => console.log('play')}
            onEdit={() => console.log('edit')}
            onDelete={() => console.log('delete')}
          />
        </tr>
      </Table>
      <br />
      <br />
      My pack
      <Table variant={'myCards'}>
        <thead>
          <tr className={s.tableHead}>
            <th>Question</th>
            <th>Answer</th>
            <th>Last Updated</th>
            <th>Grade</th>
            <th></th>
          </tr>
        </thead>
        <tr className={s.tableRow}>
          <TdCell>
            title titletitletitletitletitletitletitle titletitle titletitletitle titletitletitle
            titletitletitle titletitletitletitletitletitle titletitletitle
          </TdCell>
          <TdCell>cardsCount</TdCell>
          <TdCell>updated</TdCell>
          <TdRating rating={4} />
          <TdIcons onEdit={() => console.log('edit')} onDelete={() => console.log('delete')} />
        </tr>
        <tr className={s.tableRow}>
          <TdCell>title</TdCell>
          <TdCell>cardsCount</TdCell>
          <TdCell>updated</TdCell>
          <TdRating rating={4} />
          <TdIcons onEdit={() => console.log('edit')} onDelete={() => console.log('delete')} />
        </tr>
      </Table>
      <br />
      <br />
      Friends pack
      <Table variant={'cards'}>
        <thead>
          <tr className={s.tableHead}>
            <th>Question</th>
            <th>Answer</th>
            <th>Last Updated</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tr className={s.tableRow}>
          <TdCell>title</TdCell>
          <TdCell>cardsCount</TdCell>
          <TdCell>updated</TdCell>
          <TdRating rating={4} />
        </tr>
        <tr className={s.tableRow}>
          <TdCell>title</TdCell>
          <TdCell>cardsCount</TdCell>
          <TdCell>updated</TdCell>
          <TdRating rating={4} />
        </tr>
      </Table>
    </div>
  )
}
