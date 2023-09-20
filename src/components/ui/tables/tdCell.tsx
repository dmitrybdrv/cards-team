import { ComponentPropsWithoutRef, FC } from 'react'

import { clsx } from 'clsx'

import s from './table.module.scss'

type TdCellProps = {
  title?: string
  img?: string
  video?: string
} & ComponentPropsWithoutRef<'td'>

export const TdCell: FC<TdCellProps> = ({ title, img, video, className, ...rest }) => {
  const tdStyle = clsx(s.tdCell, className)

  return (
    <td className={tdStyle} {...rest}>
      {video && <video src={video} width={120} height={48}></video>}
      {img && <img src={img} alt="#" width={120} height={48} className={s.tdImg} />}
      <span>{title}</span>
    </td>
  )
}
