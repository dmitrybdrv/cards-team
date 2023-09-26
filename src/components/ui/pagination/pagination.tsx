import s from './pagination.module.scss'

import { ReactComponent as ArrowLeft } from '@/assets/icons/arrowLeft.svg'
import { SelectC, Typography } from '@/components/ui'

export const Pagination = ({}) => {
  const perPageCountVariant = ['10', '20', '30', '50', '100']

  const onChangeHandle = (value: string) => console.log(value)

  return (
    <div className={s.wrapper}>
      <div>
        <ArrowLeft className={s.arrowLeft} />
      </div>
      <div className={s.showPerPageWrapper}>
        <Typography variant={'body2'}>Показать</Typography>
        {/*<div className={s.selectWrapper}>*/}
        <SelectC
          values={perPageCountVariant}
          startValue={perPageCountVariant[4]}
          className={s.select}
          onValueChange={onChangeHandle}
        />
        {/*</div>*/}
        <Typography variant={'body2'}>на странице</Typography>
      </div>
    </div>
  )
}
