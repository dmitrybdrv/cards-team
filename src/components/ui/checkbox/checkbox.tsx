import { FC } from 'react'

import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckedState } from '@radix-ui/react-checkbox'

import s from './checkbox.module.scss'
import { checkBoxReturner } from './checkbox.utils.tsx'

type CheckBoxProps = {
  defaultChecked: CheckedState
  onChange: (checked: boolean) => void
  disabled?: boolean
  className?: string
}

export const CheckBox: FC<CheckBoxProps> = ({
  defaultChecked,
  onChange,
  disabled = false,
  className,
  ...rest
}) => {
  const checkBoxContent = checkBoxReturner(defaultChecked, disabled)

  const checkboxStyle = `${s.checkboxRoot} ${s.className}`

  return (
    <div className={s.checkBoxContainer}>
      <Checkbox.Root
        className={checkboxStyle}
        defaultChecked={defaultChecked}
        onCheckedChange={onChange}
        disabled={disabled}
        {...rest}
      >
        {checkBoxContent}
      </Checkbox.Root>
    </div>
  )
}
