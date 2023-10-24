import { ComponentProps, FC, memo, useEffect, useRef } from 'react'

import { TdCell, TRow } from '@/components'
import { DecksResponseItems } from '@/services/decks/decks.types.ts'

type Props = {
  items: DecksResponseItems[]
  authorId: string
  onChangeHeight: (value: number) => void
} & ComponentProps<'tbody'>

export const FriendsPackTableBody: FC<Props> = memo(({ onChangeHeight, items }) => {
  const mappedRow = items.map(item => {
    const updateData = new Date(Date.parse(item.updated)).toLocaleString('ru', {
      dateStyle: 'short',
    })

    return (
      <TRow key={item.id}>
        <TdCell img={item.cover ?? null}>{item.name}</TdCell>
        <TdCell>{item.cardsCount}</TdCell>
        <TdCell>{updateData}</TdCell>
        <TdCell>{item.author.name}</TdCell>
      </TRow>
    )
  })

  const tbodyRef = useRef<null | HTMLTableSectionElement>(null)

  useEffect(() => {
    onChangeHeight(tbodyRef.current?.offsetHeight ?? 0)
  })

  return <tbody ref={tbodyRef}>{mappedRow}</tbody>
})
