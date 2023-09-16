import { ElementType } from 'react'

export type VariantStyle =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'body1'
  | 'subtitle1'
  | 'body2'
  | 'subtitle2'
  | 'caption'
  | 'overline'
  | 'link1'
  | 'link2'
  | 'large'

type TagMapping = {
  [key in VariantStyle]: ElementType
}

export const tagMapping: TagMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  body1: 'p',
  subtitle1: 'sub',
  body2: 'p',
  subtitle2: 'sub',
  caption: 'caption',
  overline: 'span',
  link1: 'a',
  link2: 'a',
  large: 'h1',
}