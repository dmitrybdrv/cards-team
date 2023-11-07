import { FC, memo } from 'react'

import deleteIcon from '@/assets/icons/trashIcon.svg'
import { Button, Slider, TabSwitcher, TextField, Typography } from '@/components'
import s from '@/pages/decks-page/decks.module.scss'
import { tabSwitcherValue } from '@/pages/decks-page/enums'
import { useFilterState } from '@/pages/decks-page/hook/useFilterState.ts'

type Props = {
  disabled?: boolean
  onClickAddDeck: () => void
  boundaryMaxValue: number
}

export const DecksHeaderFilters: FC<Props> = memo(
  ({ onClickAddDeck, disabled, boundaryMaxValue }) => {
    const {
      searchInputValue,
      changeSearchInputHandler,
      switcherValue,
      onChangeTabSwitcher,
      currentSliderValue,
      isResetSlider,
      onChangeSlider,
      onClickClearFilter,
    } = useFilterState()

    const iconForBtn = (
      <img src={deleteIcon} alt="trash icon" style={{ marginRight: '3px', marginTop: '-3px' }} />
    )

    return (
      <div className={s.headerWrapper}>
        <div className={s.titleWrapper}>
          <Typography variant={'large'}>Decks list</Typography>
          <Button variant={'primary'} disabled={disabled} onClick={onClickAddDeck}>
            <Typography variant={'subtitle2'}>Add New Deck</Typography>
          </Button>
        </div>
        <div className={s.filtersWrapper}>
          <TextField
            disabled={disabled}
            type={'search'}
            className={s.searchInput}
            value={searchInputValue}
            onChange={changeSearchInputHandler}
          />
          <div className={s.tabSwitcherWrapper}>
            <Typography variant={'body2'} className={s.filterLabel}>
              Show decks cards
            </Typography>
            <TabSwitcher
              disabled={disabled}
              currentValue={switcherValue}
              values={tabSwitcherValue}
              defaultValue={'All Cards'}
              onChange={onChangeTabSwitcher}
            />
          </div>
          <div className={s.sliderWrapper}>
            <Typography variant={'body2'} className={s.filterLabel}>
              Number of cards
            </Typography>
            <Slider
              disabled={disabled}
              isResetSlider={isResetSlider}
              width={155}
              boundaryMaxValue={boundaryMaxValue}
              onChange={onChangeSlider}
              currentValue={currentSliderValue}
            />
          </div>
          <Button
            variant={'secondary'}
            icon={iconForBtn}
            onClick={onClickClearFilter}
            disabled={disabled}
          >
            <Typography variant={'subtitle2'}>Clear Filter</Typography>
          </Button>
        </div>
      </div>
    )
  }
)
