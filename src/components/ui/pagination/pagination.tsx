import s from './pagination.module.scss'

import { ReactComponent as ArrowLeft } from '@/assets/icons/arrowLeft.svg'
import { SelectC, Typography } from '@/components/ui'

export const Pagination = ({}) => {
  const perPageCountVariant = ['10', '20', '30', '50', '100']

  return (
    <div className={s.wrapper}>
      <div>
        <ArrowLeft className={s.arrowLeft} />
      </div>
      <div>
        <Typography variant={'body2'}>Показать</Typography>
        <div className={s.selectWrapper}>
          <SelectC values={perPageCountVariant} startValue={perPageCountVariant[4]} />
        </div>
        <Typography variant={'body2'}>на странице</Typography>
      </div>
    </div>
  )
}
