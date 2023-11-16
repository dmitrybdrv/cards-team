import { useCallback, useRef } from 'react'

export const useSkeletonHeightState = (initialValue: number) => {
  let skeletonHeight = useRef(initialValue)
  const setSkeletonHeight = useCallback((value: number) => (skeletonHeight.current = value), [])

  return [skeletonHeight, setSkeletonHeight] as const
}
