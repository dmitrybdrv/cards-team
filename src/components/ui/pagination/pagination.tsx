import { FC, ReactNode } from 'react'

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

export const Pagination: FC<Props> = ({ totalItems = 0, maxCountShowBtn = 5 }) => {
  const perPageCountVariant = ['10', '20', '30', '50', '100']

  const onChangeSelectHandle = (value: string) => console.log(value)
  const pageButtons: ReactNode[] = []
  const showItemsCount = maxCountShowBtn > totalItems ? totalItems : maxCountShowBtn

  for (let i = 1; i <= showItemsCount; i++) {
    const buttonStyle = clsx(s.pageButton, i % 2 === 0 && s.even)

    pageButtons.push(
      <button key={i} className={buttonStyle}>
        <Typography variant={'body2'}>{i}</Typography>
      </button>
    )
  }

  return (
    <div className={s.wrapper}>
      <div className={s.arrowWrapper}>
        <Arrow className={s.arrowLeft} />
      </div>
      <div className={s.pageButtons}>{pageButtons}</div>
      <div className={s.arrowWrapper}>
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
