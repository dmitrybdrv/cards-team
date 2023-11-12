import { ComponentPropsWithoutRef, ElementType, forwardRef } from 'react'

import * as RadioGroup from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'

import s from './radioGroup.module.scss'

import { Typography, radioGroupReturner } from '@/components'

type Props = {
  //TODO пофиксить тип ANY в зависимости от приходящих данных
  data: Array<any>
  value: string
  onChange: (value: string) => void
  position?: 'horiz' | 'vert'
  className: string
} & ComponentPropsWithoutRef<ElementType>

export const Radio = forwardRef<HTMLInputElement, Props>(
  ({ data, className, position, onChange, value, ...rest }, ref) => {
    const radioStyle = clsx(
      s.radioGroupContainer,
      className,
      rest.position === 'horiz' && s.position
    )

    return (
      <div className={radioStyle}>
        {data.map(el => {
          const radioGroupContent = radioGroupReturner(value, el.value)

          return (
            <RadioGroup.Root
              value={value}
              className={s.radioGroupRoot}
              key={el.id}
              onValueChange={onChange}
              ref={ref}
              {...rest}
            >
              <RadioGroup.Item value={el.value} className={s.radioGroupItem} id={el.id}>
                {radioGroupContent}
              </RadioGroup.Item>
              <label htmlFor={el.id}>
                <Typography variant={'body2'} className={s.label} aria-disabled={rest.disabled}>
                  {el.label}
                </Typography>
              </label>
            </RadioGroup.Root>
          )
        })}
      </div>
    )
  }
)
