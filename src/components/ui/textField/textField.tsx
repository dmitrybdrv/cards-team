import { ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { clsx } from 'clsx'
import { FieldError } from 'react-hook-form'

import { ReactComponent as ClosedEyeIcon } from '../../../common/assets/icons/closedEye.svg'
import { ReactComponent as OpenEyeIcon } from '../../../common/assets/icons/openEye.svg'
import { ReactComponent as SearchIcon } from '../../../common/assets/icons/searchIcon.svg'
import { Typography } from '../typography'

import s from './textField.module.scss'
import { getPlaceHolder, getType } from './textField.utils.ts'

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
      <div className={className}>
        {label && (
          <label htmlFor={rest.name} aria-disabled={rest.disabled}>
            <Typography variant={'body2'} className={s.label}>
              {label}
            </Typography>
          </label>
        )}
        <div className={s.textFieldContainer}>
          <input
            id={rest.name}
            ref={ref}
            type={typeVariant}
            className={inputStyle}
            placeholder={placeHolder}
            {...rest}
          />
          {isShowIcon}
          {error && <span className={s.errorText}>{error.message}</span>}
        </div>
      </div>
    )
  }
)
