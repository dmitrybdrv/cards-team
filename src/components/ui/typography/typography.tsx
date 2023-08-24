import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './typography.module.scss'
import { tagMapping, VariantStyle } from './typography.types.ts'

type TypographyOwnType<T extends ElementType = ElementType> = {
  children: ReactNode
  className?: string
  variant: VariantStyle
} & ComponentPropsWithoutRef<T>

type TypographyType<T extends ElementType> = TypographyOwnType<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof TypographyOwnType<T>>

export function Typography<T extends ElementType = ElementType>({
  children,
  className,
  variant,
  ...rest
}: TypographyType<T>) {
  const Component = tagMapping[variant]

  return (
    <Component className={s[variant]} {...rest}>
      {children}
    </Component>
  )
}
