import { ComponentPropsWithoutRef, FC } from 'react'

import s from './table.module.scss'

import { ReactComponent as Lock } from '@/assets/icons/lock.svg'

type TdCellProps = {
  img?: string | null
  video?: string | null
  isPrivate?: boolean
} & ComponentPropsWithoutRef<'td'>

export const TdCell: FC<TdCellProps> = ({ children, isPrivate, img, video, ...rest }) => {
  const titleContent: string = typeof children === 'string' ? children : ''

  return (
    <td {...rest}>
      <div className={s.tdCell}>
        {video && !img && <video src={video} width={120} height={48}></video>}
        {img && !video && <img src={img} alt="#" width={120} height={48} className={s.tdImg} />}
        <span className={s.tdCellTitle} title={titleContent}>
          {children}
        </span>
        {isPrivate && <Lock width={15} height={17} fill={'white'} className={s.lock} />}
      </div>
    </td>
  )
}
