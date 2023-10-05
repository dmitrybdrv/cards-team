import { FC } from 'react'

import { clsx } from 'clsx'

import s from './pagination.module.scss'

import { ReactComponent as Arrow } from '@/assets/icons/arrowLeft.svg'
import { SelectC, Typography } from '@/components/ui'
import { getCurrentPortion, getPortion } from '@/components/ui/pagination/utils'

type Props = {
  currentPage?: number
  itemsPerPage?: number
  totalPages?: number
  totalItems?: number
  maxCountShowBtn?: number
  minCountShowBtn?: number
  changePage: (newPage: number) => void
}

export const Pagination: FC<Props> = ({
  minCountShowBtn = 3,
  maxCountShowBtn = 5,
  totalPages = 0,
  currentPage = 1,
  changePage,
}) => {
  const perPageCountVariant = ['10', '20', '30', '50', '100']

  const portions = getPortion(totalPages, maxCountShowBtn, minCountShowBtn)
  const currentPortion = getCurrentPortion(currentPage, portions)
  //callBacks
  const clickRightArrowHandler = () => changePage(currentPage + 1)
  const onChangeSelectHandle = (value: string) => console.log(value)
  const onClickPageButton = (page: number) => () => changePage(page)

  //TODO arrows click handler

  const renderButtons = portions[currentPortion].map(num => {
    const buttonStyle = clsx(s.pageButton, currentPage === num && s.currentPage)

    return (
      <button key={num} className={buttonStyle} tabIndex={0} onClick={onClickPageButton(num)}>
        {num}
      </button>
    )
  })
  // is show first/last button
  const firstButtonStyle = clsx(s.pageButton, currentPage === 1 && s.currentPage)
  const renderFirstButton = currentPortion > 0 && (
    <button className={firstButtonStyle} tabIndex={0} onClick={onClickPageButton(1)}>
      1
    </button>
  )
  const renderLastButton = currentPortion < portions.length - 1 && (
    <button className={s.pageButton} tabIndex={0} onClick={onClickPageButton(totalPages)}>
      {totalPages}
    </button>
  )

  //is show dots
  const dots = <div className={s.dots}>...</div>
  const renderFirstDots = currentPortion > 0 && dots
  const renderLastDots = currentPortion < portions.length - 1 && dots

  return (
    <div className={s.wrapper}>
      <div className={s.arrowWrapper}>
        <Arrow className={s.arrowLeft} />
      </div>
      {renderFirstButton}
      {renderFirstDots}
      <div className={s.pageButtons}>{renderButtons}</div>
      {renderLastDots}
      {renderLastButton}
      <div className={s.arrowWrapper} onClick={clickRightArrowHandler}>
        <Arrow className={s.arrowRight} />
      </div>
      <div className={s.showPerPageWrapper}>
        <Typography variant={'body2'}>Показать</Typography>
        <SelectC
          values={perPageCountVariant}
          startValue={perPageCountVariant[4]}
          className={s.select}
          onValueChange={onChangeSelectHandle}
        />
        <Typography variant={'body2'}>на странице</Typography>
      </div>
    </div>
  )
}
