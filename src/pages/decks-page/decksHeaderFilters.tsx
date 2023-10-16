import { ChangeEvent, FC, useState } from 'react'

import deleteIcon from '@/assets/icons/trashIcon.svg'
import { Button, Slider, TabSwitcher, TextField, Typography } from '@/components'
import s from '@/pages/decks-page/decks.module.scss'
import { ChangeSwitcherValues } from '@/pages/decks-page/decks.tsx'

type Props = {
  switcherValue: string
  onChangeSearchInput: (searchValue: string) => void
  onChangeTabSwitcher: (value: string) => void
  onChangeSlider: (minValue: number, maxValue: number) => void
  minCardsCount: number
  maxCardsCount: number
  clearFilter: () => void
  getFuncSetting: (arg: ChangeSwitcherValues) => void
}
export const DecksHeaderFilters: FC<Props> = ({
  onChangeSearchInput,
  onChangeTabSwitcher,
  minCardsCount,
  maxCardsCount,
  onChangeSlider,
  switcherValue,
  clearFilter,
  getFuncSetting,
}) => {
  const [searchInputValue, setSearchInputValue] = useState('')

  const changeSearchInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //for UI
    setSearchInputValue(e.currentTarget.value)
    //for fetch
    onChangeSearchInput(e.currentTarget.value)
  }

  const onClickClearFilter = () => {
    clearFilter()
    setSearchInputValue('')
  }

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
          value={searchInputValue}
          onChange={changeSearchInputHandler}
        />
        <div className={s.tabSwitcherWrapper}>
          <Typography variant={'body2'} className={s.filterLabel}>
            Show packs cards
          </Typography>
          <TabSwitcher
            currentValue={switcherValue}
            values={[{ value: 'My Cards' }, { value: 'All Cards' }]}
            defaultValue={'All Cards'}
            onChange={onChangeTabSwitcher}
          />
        </div>
        <div className={s.sliderWrapper}>
          <Typography variant={'body2'} className={s.filterLabel}>
            Number of cards
          </Typography>
          <Slider
            setFuncForChangeValue={getFuncSetting}
            width={155}
            defaultMinValue={minCardsCount}
            defaultMaxValue={maxCardsCount}
            boundaryMaxValue={maxCardsCount}
            onChange={onChangeSlider}
          />
        </div>
        <Button variant={'secondary'} icon={iconForBtn} onClick={onClickClearFilter}>
          <Typography variant={'subtitle2'}>Clear Filter</Typography>
        </Button>
      </div>
    </div>
  )
}
