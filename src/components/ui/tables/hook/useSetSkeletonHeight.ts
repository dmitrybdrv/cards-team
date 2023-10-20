import { useLayoutEffect, useRef } from 'react'

export const useSetSkeletonHeight = (
  skeletonSettings: { setHeight: Function } | undefined | null
) => {
  const tbodyRef = useRef<null | HTMLTableSectionElement>(null)

  useLayoutEffect(() => {
    if (skeletonSettings && tbodyRef.current?.offsetHeight)
      skeletonSettings.setHeight(tbodyRef.current?.offsetHeight)
  })

  return tbodyRef
}
