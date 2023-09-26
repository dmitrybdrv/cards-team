import { FC, useState } from 'react'

import * as Select from '@radix-ui/react-select'
import { clsx } from 'clsx'

import { Typography } from '../typography'

import s from './select.module.scss'
import { Props } from './select.types.ts'

import { ReactComponent as ArrowDown } from '@/assets/icons/arrowDown.svg'
import { ReactComponent as ArrowUp } from '@/assets/icons/arrowUp.svg'

export const SelectC: FC<Props> = props => {
  const { onValueChange, values, startValue, label, isDisabled = false, className, ...rest } = props
  const [showSelect, setShowSelect] = useState(false)

  const isShowArrow = (showSelect && <ArrowUp />) || (!showSelect && <ArrowDown />)
  const startSelectValue = startValue || values[0]
  const items = values.map((item, i) => {
    return (
      <Select.Item className={s.selectItem} key={i} value={item}>
        <Select.ItemText>{item}</Select.ItemText>
      </Select.Item>
    )
  })

  const selectStyle = clsx(className, s.selectContainer)

  return (
    <div className={selectStyle}>
      {label && (
        <label htmlFor={rest.name} aria-disabled={rest.disabled}>
          <Typography variant={'body2'} className={s.label}>
            {label}
          </Typography>
        </label>
      )}
      <Select.Root onOpenChange={setShowSelect} disabled={isDisabled} onValueChange={onValueChange}>
        <Select.Trigger className={s.selectTrigger}>
          <Select.Value placeholder={startSelectValue} />
          <Select.Icon className={s.selectIcon}>{isShowArrow}</Select.Icon>
        </Select.Trigger>
        <Select.Content
          collisionPadding={0}
          sticky={'always'}
          position={'popper'}
          className={s.selectContent}
        >
          <Select.Viewport className={s.selectViewport}>{items}</Select.Viewport>
        </Select.Content>
      </Select.Root>
    </div>
  )
}
