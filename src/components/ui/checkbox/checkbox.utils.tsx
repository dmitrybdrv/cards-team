import { CheckedState } from '@radix-ui/react-checkbox'

import s from './checkbox.module.scss'
import DefaultSelected from './DefaultSelected.svg'
import DefaultUnselected from './DefaultUnselected.svg'
import DisabledSelect from './DisabledSelected.svg'
import DisabledUnselected from './DisabledUnselect.svg'

export const checkBoxReturner = (defaultChecked: CheckedState, disabled: boolean) => {
  if (!defaultChecked && !disabled) {
    return (
      <span className={s.selected}>
        <img src={DefaultSelected} alt="Default selected" />
      </span>
    )
  } else if (!defaultChecked && disabled) {
    return (
      <span className={s.selected}>
        <img src={DisabledSelect} alt="Disabled select" />
      </span>
    )
  } else if (defaultChecked && disabled) {
    return (
      <span className={s.unselected}>
        <img src={DisabledUnselected} alt="Disabled unselected" />
      </span>
    )
  } else {
    return (
      <span className={s.unselected}>
        <img src={DefaultUnselected} alt="Default Unselected" />
      </span>
    )
  }
}
