import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link'
  fullWidth?: boolean
  icon?: ReactNode
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => {
  const {
    variant = 'primary',
    fullWidth,
    className,
    icon,
    as: Component = 'button',
    ...rest
  } = props

  return (
    <Component className={clsx(s[variant], fullWidth && s.fullWidth, className)} {...rest}>
      {icon && icon}
      {props.children}
    </Component>
  )
}
