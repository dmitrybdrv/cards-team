import { ChangeEvent, FC, memo, useState } from 'react'

import s from '../friends-pack/friends-pack.module.scss'

import { Button, TextField, Typography } from '@/components'

type Props = {
  onChangeSearchInput: (searchValue: string) => void
  maxCardsCount: number
  disabled: boolean
}
export const FriendsPackHeaders: FC<Props> = memo(({ onChangeSearchInput, disabled }) => {
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
        <Typography variant={'large'}>Friends Pack</Typography>
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
