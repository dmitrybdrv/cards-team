import { FC, ReactNode, useState } from 'react'

import { clsx } from 'clsx'

import s from './pagination.module.scss'

import { ReactComponent as Arrow } from '@/assets/icons/arrowLeft.svg'
import { SelectC, Typography } from '@/components/ui'

type Props = {
  currentPage?: number
  itemsPerPage?: number
  totalPages?: number
  totalItems?: number
  maxCountShowBtn?: number
}

export const Pagination: FC<Props> = ({ maxCountShowBtn = 5, totalPages = 0, currentPage = 1 }) => {
  const perPageCountVariant = ['10', '20', '30', '50', '100']

  const onChangeSelectHandle = (value: string) => console.log(value)

  const getPortion = (totalPages: number, maxCountShowBtn: number, minCountShowBtn: number) => {
    const result = []
    const firstPortion = []
    const lastPortion = []
    let portion = []

    for (let i = 1; i <= totalPages; i++) {
      if (i <= maxCountShowBtn) {
        firstPortion.push(i)
        if (i === maxCountShowBtn) {
          result.push(firstPortion)
        }
      } else {
        if (portion.length <= minCountShowBtn) {
          portion.push(i)
          if (portion.length === minCountShowBtn) {
            result.push([...portion])
            portion = []
          }
        }
      }
      if (i + maxCountShowBtn > totalPages) {
        lastPortion.push(i)
        if (i === totalPages) {
          result.length > 1 ? (result[result.length - 1] = lastPortion) : result.push(lastPortion)
        }
      }
    }

    return result
  }

  // console.log(getPortion(4, 5, 3))

  const portions = getPortion(13, 5, 3)

  // [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10, 11, 12, 13]]
  const startPortion = portions.findIndex(portion => portion.includes(currentPage))
  const [currentPortion, setCurrentPortion] = useState(startPortion)
  // const clickRightArrowHandler = () =>
  //   setCurrentPortion(prevState => {
  //     const newCurrentPortion = currentPortion + 1
  //
  //     return newCurrentPortion > portions.length - 1 ? prevState : newCurrentPortion
  //   })

  // зарефакторить стили, клики на стрелки переключает страницу---_!

  const renderButtons = portions[currentPortion].map(num => {
    const buttonStyle = clsx(s.pageButton, currentPage === num && s.currentPage)

    return (
      <button key={num} className={buttonStyle}>
        {num}
      </button>
    )
  })
  // is show first/last button
  const firstButtonStyle = clsx(s.firstPage, currentPage === 0 && s.currentPage)
  const renderFirstButton = currentPortion > 0 && <div className={firstButtonStyle}>1</div>
  const renderLastButton = currentPortion < portions.length - 1 && (
    <div className={s.lastPage}>{totalPages}</div>
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
