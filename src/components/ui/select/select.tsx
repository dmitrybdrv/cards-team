import { FC, useState } from 'react'

import * as Select from '@radix-ui/react-select'
import { clsx } from 'clsx'

import { ReactComponent as ArrowDown } from '../../../assets/icons/ArrowDown.svg'
import { ReactComponent as ArrowUp } from '../../../assets/icons/ArrowUp.svg'
import { Typography } from '../typography'

import s from './select.module.scss'
import { Props } from './select.types.ts'

export const SelectC: FC<Props> = props => {
  const { values, label, isDisabled = false, className, ...rest } = props
  const [showSelect, setShowSelect] = useState(false)

  const isShowArrow = (showSelect && <ArrowUp />) || (!showSelect && <ArrowDown />)
  const items = values.map((item, i) => {
    return (
      <>
        <Select.Item className={s.selectItem} key={i} value={item}>
          <Select.ItemText>{item}</Select.ItemText>
        </Select.Item>
      </>
    )
  })

  return (
    <div className={clsx(s.selectContainer, className)}>
      {label && (
        <label htmlFor={rest.name} aria-disabled={rest.disabled}>
          <Typography variant={'body2'} className={s.label}>
            {label}
          </Typography>
        </label>
      )}
      <Select.Root onOpenChange={setShowSelect} disabled={isDisabled}>
        <Select.Trigger className={s.selectTrigger} aria-label="Food">
          <Select.Value placeholder="Select-box" />
          <Select.Icon className="selectIcon">{isShowArrow}</Select.Icon>
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
