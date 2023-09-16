import { ComponentPropsWithoutRef, FC } from 'react'

import { clsx } from 'clsx'

import { ReactComponent as EditPen } from '../../../common/assets/icons/editPen.svg'
import { ReactComponent as Play } from '../../../common/assets/icons/playIcon.svg'
import { ReactComponent as Delete } from '../../../common/assets/icons/trashIcon.svg'

import s from './table.module.scss'

type TdIconsType = {
  onPlay?: () => void
  onEdit?: () => void
  onDelete?: () => void
}
type Props = ComponentPropsWithoutRef<'td'> & TdIconsType

export const TdIcons: FC<Omit<Props, 'children'>> = ({ onPlay, onEdit, onDelete, ...rest }) => {
  return (
    <td {...rest} className={clsx(s.tdIcons, rest.className)}>
      {onPlay && <Play onClick={onPlay} />}
      {onEdit && <EditPen onClick={onEdit} />}
      {onDelete && <Delete onClick={onDelete} />}
    </td>
  )
}
