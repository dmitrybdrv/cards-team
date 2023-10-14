import { ChangeEvent, FC, useState } from 'react'

import s from './decks.module.scss'

import deleteIcon from '@/assets/icons/trashIcon.svg'
import { Button, Slider, Table, TabSwitcher, TextField, THead, Typography } from '@/components'
import { Pagination } from '@/components/ui/pagination'
import { DecksTableBody } from '@/pages/decks-page/decksTableBody.tsx'
import { useGetMeQuery } from '@/services/auth/auth.service.ts'
import { useGetDecksQuery } from '@/services/decks/decks.service.ts'
import { DecksParams } from '@/services/decks/decks.types.ts'

export const Decks = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [searchValue, setSearchValue] = useState('')
  const [isMyCards, setIsMyCards] = useState(false)
  const onChangeTabSwitcher = (value: string) => setIsMyCards(value === 'My Cards')

  const { data: profileData, isSuccess: isHasProfileData } = useGetMeQuery()
  const queryParams: DecksParams = {
    currentPage,
    itemsPerPage,
    name: searchValue,
  }

  if (isMyCards && isHasProfileData) {
    queryParams.authorId = profileData.id
  }

  const { data, isLoading, isSuccess: isHasDecksData } = useGetDecksQuery(queryParams)

  if (isLoading) return <div>Loading...</div>

  let dataItem = isHasDecksData ? data.items : []

  let paginationRender = null

  if (isHasDecksData) {
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
      <DecksHeaderFilters
        searchInput={searchValue}
        setSearchValue={setSearchValue}
        onChangeTabSwitcher={onChangeTabSwitcher}
      />
      <Table variant={'packs'}>
        <THead columns={['Name', 'Cards', 'LastUpdate', 'Created by', '']} />
        <DecksTableBody items={dataItem} authorId={profileData.id} />
      </Table>
      {paginationRender}
    </div>
  )
}

export type Props = {
  searchInput: string
  setSearchValue: (searchValue: string) => void
  onChangeTabSwitcher: (value: string) => void
}

export const DecksHeaderFilters: FC<Props> = ({
  searchInput,
  setSearchValue,
  onChangeTabSwitcher,
}) => {
  const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchValue(e.currentTarget.value)
  const iconForBtn = (
    <img src={deleteIcon} alt="trash icon" style={{ marginRight: '3px', marginTop: '-3px' }} />
  )

  return (
    <div className={s.headerWrapper}>
      <div className={s.titleWrapper}>
        <Typography variant={'large'}>Decks list</Typography>
        <Button variant={'primary'}>
          <Typography variant={'subtitle2'}>Add New Deck</Typography>
        </Button>
      </div>
      <div className={s.filtersWrapper}>
        <TextField
          type={'search'}
          className={s.searchInput}
          value={searchInput}
          onChange={onChangeSearchInput}
        />
        <div className={s.tabSwitcherWrapper}>
          <Typography variant={'body2'} className={s.filterLabel}>
            Show packs cards
          </Typography>
          <TabSwitcher
            values={[{ value: 'My Cards' }, { value: 'All Cards' }]}
            defaultValue={'All Cards'}
            onChange={onChangeTabSwitcher}
          />
        </div>
        <div className={s.sliderWrapper}>
          <Typography variant={'body2'} className={s.filterLabel}>
            Number of cards
          </Typography>
          <Slider width={155} />
        </div>
        <Button variant={'secondary'} icon={iconForBtn}>
          <Typography variant={'subtitle2'}>Clear Filter</Typography>
        </Button>
      </div>
    </div>
  )
}
