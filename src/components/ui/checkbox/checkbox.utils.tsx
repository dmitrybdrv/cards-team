import { CheckedState } from '@radix-ui/react-checkbox'

import DefaultSelected from '../../../common/assets/icons/DefaultSelected.svg'
import DefaultUnselected from '../../../common/assets/icons/DefaultUnselected.svg'
import DisabledSelect from '../../../common/assets/icons/DisabledSelected.svg'
import DisabledUnselected from '../../../common/assets/icons/DisabledUnselect.svg'

import s from './checkbox.module.scss'

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
