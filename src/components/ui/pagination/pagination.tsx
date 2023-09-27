import { FC, ReactNode } from 'react'

import s from './pagination.module.scss'

import { ReactComponent as ArrowLeft } from '@/assets/icons/arrowLeft.svg'
import { SelectC, Typography } from '@/components/ui'

type Props = {
  currentPage?: number
  itemsPerPage?: number
  totalPages?: number
  totalItems?: number
  maxCountShowBtn?: number
}

export const Pagination: FC<Props> = ({ totalItems, maxCountShowBtn = 5 }) => {
  const perPageCountVariant = ['10', '20', '30', '50', '100']

  const onChangeSelectHandle = (value: string) => console.log(value)
  const pageButtons: ReactNode[] = []
  const minItems = maxCountShowBtn > totalItems ? totalItems : maxCountShowBtn

  for (let i = 0; i < minItems; i++) {
    pageButtons.push(<button>{i}</button>)
  }
  // new Array(5).fill(<button value={'1'} title={'1'} />)

  return (
    <div className={s.wrapper}>
      <ArrowLeft className={s.arrowLeft} />
      <div className={s.pageButtons}>{pageButtons}</div>
      <ArrowLeft className={s.arrowRight} />
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
