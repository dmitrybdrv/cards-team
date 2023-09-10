import { FC } from 'react'

import * as Checkbox from '@radix-ui/react-checkbox'
import { clsx } from 'clsx'

import s from './checkbox.module.scss'
import { checkBoxReturner } from './checkbox.utils.tsx'

export type CheckBoxProps = {
  disabled?: boolean
  className?: string
  label?: string
  name?: string
  id?: string
  required?: boolean
  checked: boolean
  onChange: (checked: boolean) => void
}

export const CheckBox: FC<CheckBoxProps> = ({
  onChange,
  disabled = false,
  className,
  checked,
  label,
  id,
  ...rest
}) => {
  const checkBoxContent = checkBoxReturner(checked, disabled)

  const checkBoxContainer = clsx(s.checkBoxContainer, className)
  const htmlId = id || rest.name || Math.random().toString()

  return (
    <div className={checkBoxContainer}>
      <Checkbox.Root
        className={s.checkboxRoot}
        onCheckedChange={onChange}
        disabled={disabled}
        checked={checked}
        id={htmlId}
        {...rest}
      >
        {checkBoxContent}
      </Checkbox.Root>
      {label && (
        <label className={s.label} htmlFor={htmlId}>
          {label}
        </label>
      )}
    </div>
  )
}
