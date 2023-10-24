import { ComponentProps, FC, memo, useEffect, useRef } from 'react'

import { TdCell, TRow } from '@/components'
import { DeckResponseItems } from '@/services/deck/deck.types.ts'

type Props = {
  items: DeckResponseItems[]
  onChangeHeight: (value: number) => void
} & ComponentProps<'tbody'>

export const DeckTableBody: FC<Props> = memo(({ onChangeHeight, items }) => {
  const mappedRow = items.map(item => {
    const updateData = new Date(Date.parse(item.updated)).toLocaleString('ru', {
      dateStyle: 'short',
    })

    return (
      <TRow key={item.id}>
        <TdCell>{item.question}</TdCell>
        <TdCell>{item.answer}</TdCell>
        <TdCell>{updateData}</TdCell>
        <TdCell>{item.rating}</TdCell>
      </TRow>
    )
  })

  const tbodyRef = useRef<null | HTMLTableSectionElement>(null)

  useEffect(() => {
    onChangeHeight(tbodyRef.current?.offsetHeight ?? 0)
  })

  return <tbody ref={tbodyRef}>{mappedRow}</tbody>
})
