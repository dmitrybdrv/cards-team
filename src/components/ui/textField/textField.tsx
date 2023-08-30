import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  forwardRef,
  KeyboardEvent,
  ReactNode,
  useState,
} from 'react'

import { clsx } from 'clsx'

import s from './textField.module.scss'
import { getPlaceHolder, getType } from './textField.utils.ts'

type TextFieldProps = {
  firstIcon?: ReactNode
  secondIcon?: ReactNode
  label?: string
  onChangeHandler?: (eve: ChangeEvent<HTMLInputElement>) => void
  onEnterHandler?: (eve: KeyboardEvent<HTMLInputElement>) => void
  error?: string
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ id, firstIcon, secondIcon, type = 'text', label, error, onEnterHandler, ...rest }, ref) => {
    const [isShowPassword, setIsShowPassword] = useState(true)

    const onShowIcon = () => {
      setIsShowPassword(!isShowPassword)
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

    const isShowIcon =
      (rest.name === 'password' && (
        <span className={s.passwordIcon} onClick={onShowIcon}>
          <img
            src={
              isShowPassword ? (firstIcon as unknown as string) : (secondIcon as unknown as string)
            }
            alt="icon"
          />
        </span>
      )) ||
      (type === 'search' && (
        <span className={s.searchIcon}>
          <img src={firstIcon as unknown as string} alt="icon" />
        </span>
      ))

    return (
      <div className={s.textFieldContainer}>
        {isShowIcon}
        <input
          id={id}
          ref={ref}
          type={typeVariant}
          onKeyDown={onEnterHandler}
          className={inputStyle}
          placeholder={placeHolder}
          {...rest}
        />
        {isShowIcon}
        {error && <span className={s.errorText}>{error}</span>}
      </div>
    )
  }
)
