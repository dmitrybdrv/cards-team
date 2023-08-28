import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  forwardRef,
  KeyboardEvent,
  ReactNode,
  useState,
} from 'react'

import s from './textField.module.scss'
import { getPlaceHolder } from './textField.utils.ts'

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
    const inputStyle = `${s.input} ${rest.className ? rest.className : ''} ${error ? s.error : ''}`
    const [isShowPassword, setIsShowPassword] = useState(false)

    const onShowIcon = () => {
      setIsShowPassword(!isShowPassword)
    }

    const placeHolder = getPlaceHolder(rest.placeholder, type)

    // const typeVariant = getType(isShowPassword, type)
    //
    // console.log(typeVariant)

    const Trgdrg = type === 'password' && !isShowPassword ? 'password' : 'text'

    return (
      <div className={s.textFieldContainer}>
        {label && (
          <label className={s.label} htmlFor={id} aria-disabled={rest.disabled}>
            {label}
          </label>
        )}
        {type === 'search' && <span className={s.searchIcon}>{firstIcon}</span>}
        <input
          id={id}
          ref={ref}
          type={Trgdrg}
          onKeyDown={onEnterHandler}
          className={inputStyle}
          placeholder={placeHolder}
          {...rest}
        />
        {type === 'password' && (
          <span onClick={onShowIcon} className={s.passwordIcon}>
            {isShowPassword ? firstIcon : secondIcon}
          </span>
        )}
        {error && <span className={s.errorText}>{error}</span>}
      </div>
    )
  }
)
