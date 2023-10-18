import { FC, memo } from 'react'

import { TdCell, TdIcons, TRow } from '@/components'
import { DecksResponseItems } from '@/services/decks/decks.types.ts'

type Props = {
  items: DecksResponseItems[]
  authorId: string
}

export const DecksTableBody: FC<Props> = memo(({ items, authorId }) => {
  console.log('DecksTableBody render---')

  const mappedRow = items.map(item => {
    const updateData = new Date(Date.parse(item.updated)).toLocaleString('ru', {
      dateStyle: 'short',
    })
    const playDeckHandler = () => console.log('play deck id: ', item.id)
    const editDeckHandler = () => console.log('edit deck id: ', item.id)
    const deleteDeckHandler = () => console.log('delete deck id: ', item.id)

    const isAuthor = authorId === item.author.id
    const onEdit = isAuthor ? editDeckHandler : null
    const onDelete = isAuthor ? deleteDeckHandler : null

    return (
      <TRow key={item.id}>
        <TdCell img={item.cover ?? null}>{item.name}</TdCell>
        <TdCell>{item.cardsCount}</TdCell>
        <TdCell>{updateData}</TdCell>
        <TdCell>{item.author.name}</TdCell>
        <TdIcons onPlay={playDeckHandler} onEdit={onEdit} onDelete={onDelete} />
      </TRow>
    )
  })

  return <tbody>{mappedRow}</tbody>
})
