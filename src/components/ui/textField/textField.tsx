import { ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { clsx } from 'clsx'

import { ReactComponent as ClosedEyeIcon } from '../../../common/assets/icons/closedEye.svg'
import { ReactComponent as OpenEyeIcon } from '../../../common/assets/icons/openEye.svg'
import { ReactComponent as SearchIcon } from '../../../common/assets/icons/searchIcon.svg'

import s from './textField.module.scss'
import { getPlaceHolder, getType } from './textField.utils.ts'

type TextFieldProps = {
  label?: string
  error?: string
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ type = 'text', label, error, ...rest }, ref) => {
    const [isShowPassword, setIsShowPassword] = useState(true)

    const onShowIcon = () => {
      !rest.disabled && setIsShowPassword(!isShowPassword)
    }

    const inputStyle = clsx(
      s.input,
      rest.className,
      error && s.error,
      rest.name === 'password' && s.passwordInput,
      rest.name === 'search' && s.searchInput
    )

    const placeHolder = getPlaceHolder(rest.placeholder, type)

    const typeVariant = getType(isShowPassword, type)

    const SvgComponent = isShowPassword ? OpenEyeIcon : ClosedEyeIcon

    const isShowIcon =
      (rest.name === 'password' && <SvgComponent className={s.eyeIcon} onClick={onShowIcon} />) ||
      (type === 'search' && <SearchIcon className={s.searchIcon} />)

    return (
      <>
        {label && (
          <label htmlFor={rest.name} className={s.label} aria-disabled={rest.disabled}>
            {label}
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
          {error && <span className={s.errorText}>{error}</span>}
        </div>
      </>
    )
  }
)
