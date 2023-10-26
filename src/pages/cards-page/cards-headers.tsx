import { ChangeEvent, FC, memo, useState } from 'react'

import s from './cards.module.scss'

import { Button, TextField, Typography } from '@/components'

type Props = {
  onChangeSearchInput: (searchValue: string) => void
  disabled: boolean
  cardsPageTitle: string
}
export const CardsHeaders: FC<Props> = memo(({ onChangeSearchInput, disabled, cardsPageTitle }) => {
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
        <Typography variant={'large'}>{cardsPageTitle}</Typography>
        <Button variant={'primary'} disabled={disabled} onClick={() => {}}>
          <Typography variant={'subtitle2'}>Learn Pack</Typography>
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
})
