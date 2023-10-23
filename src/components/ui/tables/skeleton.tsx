import { FC } from 'react'

import s from './table.module.scss'

type SkeletonProps = {
  isLoading: boolean
  isFetching: boolean
  currentHeight: number
}
export const Skeleton: FC<SkeletonProps> = ({ isLoading, isFetching, currentHeight }) => {
  const skeletonStyle = {
    height: currentHeight + 1,
    marginTop: isLoading ? 0 : -currentHeight - 1,
  }

  return isFetching ? (
    <div className={s.skeleton} style={skeletonStyle}>
      <div className={s.skeletonLine}></div>
    </div>
  ) : (
    <div></div>
  )
}
