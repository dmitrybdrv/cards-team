import { ComponentPropsWithoutRef, FC, useState } from 'react'

import * as Select from '@radix-ui/react-select'

import { ArrowDown } from '../../../common/assets/icons/arrowDown.tsx'
import { ArrowUp } from '../../../common/assets/icons/arrowUp.tsx'
import { Typography } from '../typography'

import s from './select.module.scss'

type Props = {
  values: string[]
  isDisabled?: boolean
  label?: string
} & ComponentPropsWithoutRef<'select'>

export const SelectC: FC<Props> = ({ values, label, isDisabled = false, ...rest }) => {
  const [showSelect, setShowSelect] = useState(false)

  const isShowArrow = (showSelect && <ArrowUp />) || (!showSelect && <ArrowDown />)
  const items = values.map((item, i) => {
    return (
      <>
        <Select.Item key={i} value={item}>
          <Select.ItemText>{item}</Select.ItemText>
        </Select.Item>
      </>
    )
  })

  return (
    <div className={s.selectContainer}>
      {label && (
        <label htmlFor={rest.name} aria-disabled={rest.disabled}>
          <Typography variant={'body2'} className={s.label}>
            {label}
          </Typography>
        </label>
      )}
      <Select.Root onOpenChange={setShowSelect} disabled={isDisabled}>
        <Select.Trigger className={s.selectTrigger} aria-label="Food">
          <Select.Value placeholder="Select-box" />
          <Select.Icon className="selectIcon">{isShowArrow}</Select.Icon>
        </Select.Trigger>
        <Select.Content
          collisionPadding={0}
          sticky={'always'}
          position={'popper'}
          className={s.selectContent}
        >
          <Select.Viewport className={s.selectViewport}>{items}</Select.Viewport>
        </Select.Content>
      </Select.Root>
    </div>
  )
}

// export type SelectItemProps = {
//   children: ReactNode
//   value: string
//   variant: 'primary' | 'active' | 'hover' | 'focus'
//   className?: string
// } & React.RefAttributes<HTMLDivElement>
//
// const SelectItem: React.FC<SelectItemProps> = React.forwardRef(
//   ({ children, className, variant = 'primary', ...props }, forwardedRef) => {
//     return (
//       <Select.Item className={classnames('SelectItem', className)} {...props} ref={forwardedRef}>
//         <Select.ItemText>{children}</Select.ItemText>
//         <Select.ItemIndicator className="SelectItemIndicator">
//           <CheckIcon />
//         </Select.ItemIndicator>
//       </Select.Item>
//     )
//   }
