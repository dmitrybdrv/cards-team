import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { CheckBox, CheckBoxProps } from './checkbox.tsx'

type Props<TFieldValues extends FieldValues> = UseControllerProps<TFieldValues> &
  Omit<CheckBoxProps, 'onChange' | 'checked'>

export const ControlledCheckbox = <TFieldValues extends FieldValues>({
  control,
  name,
  defaultValue,
  rules,
  shouldUnregister,
  ...rest
}: Props<TFieldValues>) => {
  const {
    field: { value, onChange },
  } = useController({
    control,
    name,
    defaultValue,
    rules,
    shouldUnregister,
  })

  return <CheckBox {...{ checked: value, onChange, ...rest }} />
}
