import { FC, forwardRef, HTMLProps, ReactNode, RefAttributes } from 'react'

import { clsx } from 'clsx'

import s from './card.module.scss'

type CardProps = {
  children: ReactNode
} & HTMLProps<HTMLDivElement> &
  RefAttributes<HTMLDivElement>

export const Card: FC<CardProps> = forwardRef(({ className, children, ...rest }, ref) => {
  return (
    <div className={clsx(s.cardContainer, className)} {...rest} ref={ref}>
      {children}
    </div>
  )
})
