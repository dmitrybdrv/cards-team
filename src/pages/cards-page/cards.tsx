import { FC } from 'react'

import { Link } from 'react-router-dom'

import { ReactComponent as ArrowBack } from '../../assets/icons/arrow-back-outline.svg'

import s from './cards.module.scss'

import { Skeleton, Table, TableColumns, THead, Typography } from '@/components'
import { Pagination } from '@/components/ui/pagination'
import { CardsHeaders } from '@/pages/cards-page/cards-headers.tsx'
import { CardsTableBody } from '@/pages/cards-page/cards-table-body.tsx'
import { friendsOrderName } from '@/pages/cards-page/cards.types.ts'
import { useGetCards } from '@/pages/cards-page/useGetCards.tsx'
import { useSkeletonHeightState } from '@/pages/decks-page/hook/useSkeletonHeightState.ts'

const friendsColumnsTitles: TableColumns<friendsOrderName> = [
  { title: 'Question', orderName: 'question' },
  { title: 'Answer', orderName: 'answer' },
  { title: 'LastUpdate', orderName: 'updated' },
  { title: 'Grade' },
  // { title: '' },
]
const perPageCountVariant = ['10', '20', '30', '50', '100']
const initialSkeletonHeight = 374

export const Cards: FC = () => {
  const {
    isFetching,
    isError,
    deckData: {
      pagination: { currentPage, itemsPerPage, totalPages },
      items,
    },
    isLoadingDecksData,
    sort,
    setSortMemo,
    onChangeSearchInputMemo,
    setCurrentPageMemo,
    setItemsPerPageMemo,
  } = useGetCards()

  let [skeletonHeight, setSkeletonHeight] = useSkeletonHeightState(initialSkeletonHeight)

  if (isError) return <h1>Error!</h1>

  return (
    <div className={s.pageWrapper}>
      <Link style={{ textDecoration: 'none' }} to={'/'}>
        <div className={s.linkArrowContainer}>
          <ArrowBack />
          <Typography variant={'body2'}>Back to Packs List</Typography>
        </div>
      </Link>
      <CardsHeaders disabled={isFetching} onChangeSearchInput={onChangeSearchInputMemo} />
      <Table variant={'cards'}>
        <THead
          columns={friendsColumnsTitles}
          onSort={setSortMemo}
          currentSort={sort}
          disabled={isFetching}
        />
        <CardsTableBody items={items} onChangeHeight={setSkeletonHeight} />
      </Table>
      <Skeleton
        isFetching={isFetching}
        isLoading={isLoadingDecksData}
        currentHeight={skeletonHeight.current}
      />
      <div className={s.paginationWrapper}>
        <Pagination
          disabled={isFetching}
          perPageCountVariant={perPageCountVariant}
          currentPage={currentPage}
          totalPages={totalPages}
          itemsPerPage={itemsPerPage}
          changePage={setCurrentPageMemo}
          changeItemsPerPage={setItemsPerPageMemo}
          className={s.pagination}
        />
      </div>
    </div>
  )
}
