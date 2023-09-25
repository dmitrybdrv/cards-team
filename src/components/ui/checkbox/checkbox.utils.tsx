import s from './checkbox.module.scss'

import DefaultSelected from '@/assets/icons/defaultSelected.svg'
import DefaultUnselected from '@/assets/icons/defaultUnselected.svg'
import DisabledSelect from '@/assets/icons/disabledSelected.svg'
import DisabledUnselected from '@/assets/icons/disabledUnselect.svg'

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
