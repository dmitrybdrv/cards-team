import { FC, useCallback, useState } from 'react'

import { useForm } from 'react-hook-form'

import s from './decks.module.scss'

import { Button, Skeleton, Table, TableColumns, TextField, THead } from '@/components'
import { Modal } from '@/components/layout/forms'
import { ModalButton } from '@/components/layout/forms/modal/modalButton.tsx'
import { ModalClose } from '@/components/layout/forms/modal/modalClose.tsx'
import { ModalContent } from '@/components/layout/forms/modal/modalContent.tsx'
import { ModalField } from '@/components/layout/forms/modal/modalField.tsx'
import { ModalTitle } from '@/components/layout/forms/modal/modalTitle.tsx'
import { ControlledCheckbox } from '@/components/ui/checkbox/ControlledCheckbox.tsx'
import { Pagination } from '@/components/ui/pagination'
import { DecksHeaderFilters } from '@/pages/decks-page/decksHeaderFilters.tsx'
import { DecksTableBody } from '@/pages/decks-page/decksTableBody.tsx'
import { useGetDecks } from '@/pages/decks-page/hook/useGetDecks.tsx'
import { useSkeletonHeightState } from '@/pages/decks-page/hook/useSkeletonHeightState.ts'
import { CreateDeckArgs } from '@/services/auth/auth.types.ts'
import { DecksOrderName } from '@/services/decks/decks.types.ts'

const decksColumnsTitles: TableColumns<DecksOrderName> = [
  { title: 'Name', orderName: 'name' },
  { title: 'Cards', orderName: 'cardsCount' },
  { title: 'LastUpdate', orderName: 'updated' },
  { title: 'Created by' },
  { title: '' },
]
const perPageCountVariant = ['10', '20', '30', '50', '100']

export const DecksPage: FC = () => {
  const {
    isFetching,
    isError,
    profileData: { id: authorId },
    decksData: {
      maxCardsCount,
      pagination: { currentPage, itemsPerPage, totalPages },
      items,
    },
    isLoadingDecksData,
    switcherValue,
    sort,
    setSortMemo,
    onChangeSearchInputMemo,
    onChangeTabSwitcherMemo,
    onChangeSliderMemo,
    clearFilterMemo,
    getFuncForChangeSliderValueMemo,
    setCurrentPageMemo,
    setItemsPerPageMemo,
  } = useGetDecks()

  let [skeletonHeight, setSkeletonHeight] = useSkeletonHeightState(374)

  const [isOpenModal, setIsOpenModal] = useState(false)
  const onClickAddDeck = useCallback(() => setIsOpenModal(true), [])

  const {
    // formState: { errors },
    register,
    handleSubmit,
    control,
  } = useForm<CreateDeckArgs>()

  if (isError) return <h1>Error!</h1>

  return (
    <div className={s.pageWrapper}>
      <Modal isOpen={isOpenModal} onOpenChange={setIsOpenModal}>
        <ModalContent>
          <ModalTitle>Add New Deck</ModalTitle>
          <ModalClose>X</ModalClose>
          <ModalField>
            <form onSubmit={handleSubmit(data => console.log(data))}>
              <TextField
                autoFocus
                {...register('name')}
                label={'Name Deck'}
                placeholder={'Name'}
              ></TextField>
              <ControlledCheckbox
                control={control}
                defaultValue={true}
                label={'Private deck'}
                name={'isPrivate'}
              />
              <ModalButton>
                <Button variant={'secondary'} onClick={() => setIsOpenModal(false)} type={'button'}>
                  Close
                </Button>
                <Button variant={'primary'} type={'submit'}>
                  Add New Deck
                </Button>
              </ModalButton>
            </form>
          </ModalField>
        </ModalContent>
      </Modal>
      <DecksHeaderFilters
        disabled={isFetching}
        switcherValue={switcherValue}
        onChangeSearchInput={onChangeSearchInputMemo}
        onChangeTabSwitcher={onChangeTabSwitcherMemo}
        maxCardsCount={maxCardsCount}
        onChangeSlider={onChangeSliderMemo}
        clearFilter={clearFilterMemo}
        getFuncSetting={getFuncForChangeSliderValueMemo}
        onClickAddDeck={onClickAddDeck}
      />
      <Table variant={'packs'}>
        <THead
          columns={decksColumnsTitles}
          onSort={setSortMemo}
          currentSort={sort}
          disabled={isFetching}
        />
        <DecksTableBody items={items} authorId={authorId} setHeight={setSkeletonHeight} />
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
