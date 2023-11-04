import { ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { clsx } from 'clsx'
import { FieldError } from 'react-hook-form'

import s from './textField.module.scss'
import { getPlaceHolder, getType } from './textField.utils.ts'

import { ReactComponent as ClosedEyeIcon } from '@/assets/icons/closedEye.svg'
import { ReactComponent as OpenEyeIcon } from '@/assets/icons/openEye.svg'
import { ReactComponent as SearchIcon } from '@/assets/icons/searchIcon.svg'
import { Typography } from '@/components'

type TextFieldProps = {
  label?: string
  error?: FieldError
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ type = 'text', label, error, className, ...rest }, ref) => {
    const [isShowPassword, setIsShowPassword] = useState(true)

    const onShowIcon = () => {
      !rest.disabled && setIsShowPassword(!isShowPassword)
    }

    const inputStyle = clsx(
      s.input,
      error && s.error,
      type === 'password' && s.passwordInput,
      type === 'search' && s.searchInput
    )

    const placeHolder = getPlaceHolder(rest.placeholder, type)

    const typeVariant = getType(isShowPassword, type)

    const SvgComponent = isShowPassword ? OpenEyeIcon : ClosedEyeIcon

    const isShowIcon =
      (type === 'password' && <SvgComponent className={s.eyeIcon} onClick={onShowIcon} />) ||
      (type === 'search' && <SearchIcon className={s.searchIcon} />)

    return (
      <div className={clsx(s.inputWrapper, className)}>
        {label && (
          <label htmlFor={rest.name} aria-disabled={rest.disabled}>
            <Typography variant={'body2'} className={s.label}>
              {label}
            </Typography>
          </label>
        )}
        <div className={s.inputWrapper}>
          <input
            id={rest.name}
            ref={ref}
            type={typeVariant}
            className={inputStyle}
            placeholder={placeHolder}
            autoComplete={'current'}
            {...rest}
          />
          {isShowIcon}
        </div>
        {error && (
          // <span className={s.errorText}>{error.message}</span>
          <Typography variant={'caption'} className={s.errorText}>
            {error.message}
          </Typography>
        )}
      </div>
    )
  }
)
