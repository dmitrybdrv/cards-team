import { ChangeEvent, FC, memo, useState } from 'react'

import { Button, TextField, Typography } from '@/components'
import s from '@/pages/decks-page/decks.module.scss'

type Props = {
  onChangeSearchInput: (searchValue: string) => void
  maxCardsCount: number
  disabled: boolean
  onClickAddDeck: () => void
}
export const MyPackHeaders: FC<Props> = memo(
  ({ onChangeSearchInput, disabled, onClickAddDeck }) => {
    const [searchInputValue, setSearchInputValue] = useState('')
    const changeSearchInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
      //for UI
      setSearchInputValue(e.currentTarget.value)
      //for fetch
      onChangeSearchInput(e.currentTarget.value)
    }

    return (
      <div className={s.headerWrapper}>
        <div className={s.titleWrapper}>
          <Typography variant={'large'}>My Pack</Typography>
          <Button variant={'primary'} disabled={disabled} onClick={onClickAddDeck}>
            <Typography variant={'subtitle2'}>Add New Card</Typography>
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
        </div>
      </div>
    )
  }
)
