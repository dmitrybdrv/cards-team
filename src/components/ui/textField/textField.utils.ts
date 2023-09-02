import { HTMLInputTypeAttribute } from 'react'

/**
 * onTypeChanger - функция меняющая стили поведения компонента TextInput в зависимости от передаваемого type.
 * @param isShowPassword (type: boolean) - значение открывающее, скрывающее символы в поле TextInput
 * @param type (type: InputHTMLAttributes<HTMLInputElement>) - тип который должен принять input ('text', 'password', 'search')
 */
export const getType = (isShowPassword: boolean, type: HTMLInputTypeAttribute) => {
  if (type === 'password') {
    if (isShowPassword) {
      return 'password'
    } else {
      return 'text'
    }
  }

  return type
}

/**
 * onPlaceHolderChanger - функция позволяющая автоматически заполнять placeholder для input, в зависимости от выбранного type
 * @param placeholder - текст внутри textInput (input)
 * @param type (type: InputHTMLAttributes<HTMLInputElement>) - тип который должен принять input ('text', 'password', 'search')
 */
export const getPlaceHolder = (placeholder: string | undefined, type: HTMLInputTypeAttribute) => {
  if (type === 'search') {
    placeholder = 'Input search...'

    return placeholder
  } else if (type === 'password') {
    placeholder = 'Password'

    return placeholder
  } else if (type === 'text') {
    placeholder = 'Input'

    return placeholder
  } else {
    return placeholder
  }
}
