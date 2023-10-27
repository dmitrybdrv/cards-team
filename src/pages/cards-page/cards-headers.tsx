import { ChangeEvent, FC, memo, useState } from 'react'

import { ReactComponent as EditPen } from '../../assets/icons/editPen.svg'
import { ReactComponent as PlayIcon } from '../../assets/icons/playIcon.svg'
import { ReactComponent as TrashIcon } from '../../assets/icons/trashIcon.svg'

import s from './cards.module.scss'

import { Button, TextField, ToolbarItemWithIcon, Typography } from '@/components'
import { MyPackDropDown } from '@/pages/cards-page/my-pack-drop-down'

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

  const MyPackDropDownHandler = () => {
    return (
      <MyPackDropDown>
        <ToolbarItemWithIcon
          icon={<PlayIcon />}
          text={'Learn'}
          onSelect={() => {}}
        ></ToolbarItemWithIcon>
        <ToolbarItemWithIcon
          icon={<EditPen />}
          text={'Edit'}
          onSelect={() => {}}
        ></ToolbarItemWithIcon>
        <ToolbarItemWithIcon
          icon={<TrashIcon />}
          text={'Delete'}
          onSelect={() => {}}
        ></ToolbarItemWithIcon>
      </MyPackDropDown>
    )
  }

  return (
    <div className={s.headerWrapper}>
      <div className={s.titleWrapper}>
        <div className={s.dotsWrapper}>
          <Typography variant={'large'}>{cardsPageTitle}</Typography>
          {cardsPageTitle === 'My Pack' ? <MyPackDropDownHandler /> : null}
        </div>
        {cardsPageTitle === 'My Pack' ? (
          <Button variant={'primary'} disabled={disabled} onClick={() => {}}>
            <Typography variant={'subtitle2'}>Add Card</Typography>
          </Button>
        ) : (
          <Button variant={'primary'} disabled={disabled} onClick={() => {}}>
            <Typography variant={'subtitle2'}>Learn Pack</Typography>
          </Button>
        )}
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
