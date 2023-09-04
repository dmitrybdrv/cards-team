import { FC, HTMLProps, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './card.module.scss'

type CardProps = {
  children: ReactNode
} & HTMLProps<HTMLDivElement>

export const Card: FC<CardProps> = ({ className, children, ...rest }) => {
  return (
    <div className={clsx(s.cardContainer, className)} {...rest}>
      {children}
    </div>
  )
}
