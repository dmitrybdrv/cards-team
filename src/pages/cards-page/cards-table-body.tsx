import { ComponentProps, FC, memo, useEffect, useRef } from 'react'

import { TdCell, TdIcons, TdRating, TRow } from '@/components'
import { CardModalVariant, CardsResponseItems } from '@/services/cards/cards.types.ts'

type Props = {
  items: CardsResponseItems[]
  onChangeHeight: (value: number) => void
  onClickEditOrDeleteCardIcons: (params: CardsResponseItems, variant: CardModalVariant) => void
  authorId: string
} & ComponentProps<'tbody'>

export const CardsTableBody: FC<Props> = memo(
  ({ onChangeHeight, items, onClickEditOrDeleteCardIcons, authorId }) => {
    const mappedRow = items.map(item => {
      const updateData = new Date(Date.parse(item.updated)).toLocaleString('ru', {
        dateStyle: 'short',
      })
      const editCardHandler = () => onClickEditOrDeleteCardIcons(item.id, 'updateCard')
      const deleteCardHandler = () => onClickEditOrDeleteCardIcons(item.id, 'deleteCard')

      const isAuthor = authorId === item.userId
      const onEdit = isAuthor ? editCardHandler : null
      const onDelete = isAuthor ? deleteCardHandler : null

      return (
        <TRow key={item.id}>
          <TdCell>{item.question}</TdCell>
          <TdCell>{item.answer}</TdCell>
          <TdCell>{updateData}</TdCell>
          <TdRating rating={item.grade} />
          <TdIcons onDelete={onDelete} onEdit={onEdit} onPlay={() => {}} />
        </TRow>
      )
    })

    const tbodyRef = useRef<null | HTMLTableSectionElement>(null)

    useEffect(() => {
      onChangeHeight(tbodyRef.current?.offsetHeight ?? 0)
    })

    return <tbody ref={tbodyRef}>{mappedRow}</tbody>
  }
)
