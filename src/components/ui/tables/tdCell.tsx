import { ComponentPropsWithoutRef, FC } from 'react'

import { clsx } from 'clsx'

import s from './table.module.scss'

type TdCellProps = {
  img?: string
  video?: string
} & ComponentPropsWithoutRef<'td'>

export const TdCell: FC<TdCellProps> = ({ children, img, video, className, ...rest }) => {
  const tdStyle = clsx(s.tdCell, className)
  const titleContent: string = typeof children === 'string' ? children : ''

  return (
    <td className={tdStyle} {...rest}>
      {video && <video src={video} width={120} height={48}></video>}
      {img && <img src={img} alt="#" width={120} height={48} className={s.tdImg} />}
      <span className={s.tdCellTitle} title={titleContent}>
        {children}
      </span>
    </td>
  )
}
