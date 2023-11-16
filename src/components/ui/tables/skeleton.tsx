import { FC } from 'react'

import { clsx } from 'clsx'

import s from './table.module.scss'

type SkeletonProps = {
  isLoading: boolean
  isFetching: boolean
  currentHeight: number
  className?: string
}
export const Skeleton: FC<SkeletonProps> = ({
  isLoading,
  isFetching,
  currentHeight,
  className,
}) => {
  const skeletonStyle = {
    height: currentHeight + 1,
    marginTop: isLoading ? 0 : -currentHeight - 1,
  }

  const style = clsx(s.skeleton, className)

  return isFetching ? (
    <div className={style} style={skeletonStyle}>
      <div className={s.skeletonLine}></div>
    </div>
  ) : (
    <div></div>
  )
}
