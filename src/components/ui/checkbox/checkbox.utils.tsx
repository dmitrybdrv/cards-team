import DefaultSelected from '../../../assets/icons/DefaultSelected.svg'
import DefaultUnselected from '../../../assets/icons/DefaultUnselected.svg'
import DisabledSelect from '../../../assets/icons/DisabledSelected.svg'
import DisabledUnselected from '../../../assets/icons/DisabledUnselect.svg'

import s from './checkbox.module.scss'

export const checkBoxReturner = (checked: boolean, disabled: boolean) => {
  return (
    <span className={s.selected}>
      {disabled ? (
        <img src={checked ? DisabledSelect : DisabledUnselected} alt="Default selected" />
      ) : (
        <img src={checked ? DefaultSelected : DefaultUnselected} alt="Default selected" />
      )}
    </span>
  )
}
