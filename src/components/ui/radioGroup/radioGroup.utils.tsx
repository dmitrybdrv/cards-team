import { RadioGroupSelectIndicator } from '../../../assets/icons/RadioGroupSelectIndicator.tsx'
import { RadioGroupUnselectIndicator } from '../../../assets/icons/RadioGroupUnselect.tsx'

import s from './radioGroup.module.scss'

export const radioGroupReturner = (value: string, elValue: string) => {
  if (elValue !== value) {
    return <RadioGroupUnselectIndicator className={s.iconSelect} />
  } else {
    return <RadioGroupSelectIndicator className={s.iconSelect} />
  }
}
