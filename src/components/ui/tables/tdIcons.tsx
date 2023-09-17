import { ComponentPropsWithoutRef, FC } from 'react'

import { clsx } from 'clsx'

import { ReactComponent as EditPen } from '../../../assets/icons/editPen.svg'
import { ReactComponent as Play } from '../../../assets/icons/playIcon.svg'
import { ReactComponent as Delete } from '../../../assets/icons/trashIcon.svg'

import s from './table.module.scss'

type TdIconsType = {
  onPlay?: () => void
  onEdit?: () => void
  onDelete?: () => void
}
type Props = ComponentPropsWithoutRef<'td'> & TdIconsType

export const TdIcons: FC<Omit<Props, 'children'>> = ({ onPlay, onEdit, onDelete, ...rest }) => {
  const style = clsx(s.tdIcons, rest.className)

  return (
    <td {...rest} className={style}>
      {onPlay && <Play onClick={onPlay} />}
      {onEdit && <EditPen onClick={onEdit} />}
      {onDelete && <Delete onClick={onDelete} />}
    </td>
  )
}
