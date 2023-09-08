import DefaultSelected from '../../../common/assets/icons/DefaultSelected.svg'
import DefaultUnselected from '../../../common/assets/icons/DefaultUnselected.svg'
import DisabledSelect from '../../../common/assets/icons/DisabledSelected.svg'
import DisabledUnselected from '../../../common/assets/icons/DisabledUnselect.svg'

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
