import { ReactComponent as RadioGroupSelectIndicator } from '../../../assets/icons/radio_button_checked.svg'
import { ReactComponent as RadioGroupUnselectIndicator } from '../../../assets/icons/radio_button_unchecked.svg'

import s from './radioGroup.module.scss'

export const radioGroupReturner = (value: string, elValue: string) => {
  if (elValue !== value) {
    return <RadioGroupUnselectIndicator className={s.iconSelect} />
  } else {
    return <RadioGroupSelectIndicator className={s.iconSelect} />
  }
}
