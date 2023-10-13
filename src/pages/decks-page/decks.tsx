import { FC, useState } from 'react'

import s from './decks.module.scss'

import deleteIcon from '@/assets/icons/trashIcon.svg'
import {
  Button,
  Slider,
  Table,
  TabSwitcher,
  TdCell,
  TdIcons,
  TextField,
  THead,
  TRow,
  Typography,
} from '@/components'
import { Pagination } from '@/components/ui/pagination'
import { useGetDecksQuery } from '@/services/decks/decks.service.ts'

// import { DecksResponsePagination } from '@/services/decks/decks.types.ts'

export const Decks = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const { data, isLoading, isSuccess } = useGetDecksQuery({
    currentPage,
    itemsPerPage,
  })

  if (isLoading) return <div>Loading...</div>

  let mappedRow: any[] = []
  let paginationRender = null

  if (isSuccess) {
    mappedRow = data.items.map(item => {
      const updateData = new Date(Date.parse(item.updated)).toLocaleString('en', {
        dateStyle: 'short',
      })

      return (
        <TRow key={item.id}>
          <TdCell>{item.name}</TdCell>
          <TdCell>{item.cardsCount}</TdCell>
          <TdCell>{updateData}</TdCell>
          <TdCell>{item.author.name}</TdCell>
          <TdIcons
            onPlay={() => console.log('play')}
            onEdit={() => console.log('edit')}
            onDelete={() => console.log('delete')}
          />
        </TRow>
      )
    })
    paginationRender = (
      <div className={s.paginationWrapper}>
        <Pagination
          currentPage={data.pagination.currentPage}
          totalPages={data.pagination.totalPages}
          itemsPerPage={data.pagination.itemsPerPage}
          changePage={setCurrentPage}
          changeItemsPerPage={setItemsPerPage}
        />
      </div>
    )
  }

  return (
    <div className={s.pageWrapper}>
      <HeaderDecks />
      <Table variant={'packs'}>
        <THead columns={['Name', 'Cards', 'LastUpdate', 'Created by', '']} />
        <tbody>{mappedRow}</tbody>
      </Table>
      {paginationRender}
    </div>
  )
}

export type Props = {}

export const HeaderDecks: FC<Props> = ({}) => {
  const iconForBtn = <img src={deleteIcon} alt="trash icon" style={{ marginRight: '5px' }} />

  return (
    <div className={s.headerWrapper}>
      <div className={s.titleWrapper}>
        <Typography variant={'h1'}>Decks list</Typography>
        <Button variant={'primary'}>Create new deck</Button>
      </div>
      <div className={s.filterWrapper}>
        <TextField type={'search'} />
        <div className={s.tabSwitcherWrapper}>
          <Typography variant={'body2'}>Show packs cards</Typography>
          <TabSwitcher values={[{ value: 'My Cards' }, { value: 'All Cards' }]} />
        </div>
        <div className={s.sliderWrapper}>
          <Typography variant={'body2'}>Number of cards</Typography>
          <Slider />
        </div>
        <Button variant={'secondary'} icon={iconForBtn}>
          Clear Filter
        </Button>
      </div>
    </div>
  )
}
