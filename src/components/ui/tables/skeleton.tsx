import { FC, useEffect, useState } from 'react'

import s from './table.module.scss'

type SkeletonProps = {
  isLoading: boolean
  isFetching: boolean
  transferSkeletonSettings: (setHeight: { setHeight: Function }) => void
}
export const Skeleton: FC<SkeletonProps> = ({
  isLoading,
  isFetching,
  transferSkeletonSettings,
}) => {
  const initialTbodyHeight = 374

  let [height, setHeight] = useState(initialTbodyHeight)

  useEffect(() => {
    transferSkeletonSettings({ setHeight })
  }, [])

  const skeletonStyle = {
    height,
    marginTop: isLoading ? 0 : -height,
  }

  return isFetching ? (
    <div className={s.skeleton} style={skeletonStyle}>
      <div className={s.skeletonLine}></div>
    </div>
  ) : (
    <div></div>
  )
}
