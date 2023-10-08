import { useState } from 'react'

import { Button } from '@/components'
import {
  useCreateDeckMutation,
  useDeleteDecksMutation,
  useGetDecksQuery,
} from '@/services/decks/decks.service.ts'

export const Decks = () => {
  const [itemsPerPage, setItemPerPage] = useState(10)
  const decks = useGetDecksQuery({
    itemsPerPage,
  })
  const [createDeck, { isLoading }] = useCreateDeckMutation()
  const [deleteDeck] = useDeleteDecksMutation()

  if (decks.isLoading) return <div>Loading...</div>
  if (decks.isError) return <div>Error!!!!</div>

  return (
    <div>
      <Button
        onClick={() => {
          setItemPerPage(20)
        }}
        disabled={isLoading}
      >
        Item per page 20
      </Button>
      <Button
        onClick={() => {
          setItemPerPage(10)
        }}
      >
        Item per page 10
      </Button>
      {/*{JSON.stringify(decks || '')}*/}
      <Button
        onClick={() => {
          createDeck({ name: '123' })
        }}
        variant={'primary'}
      >
        Create deck
      </Button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cards</th>
            <th>Last updated</th>
            <th>created by</th>
          </tr>
        </thead>
        <tbody>
          {decks.data?.items.map(deck => {
            return (
              <tr key={deck.id}>
                <td>{deck.name}</td>
                <td>{deck.cardsCount}</td>
                <td>{deck.updated}</td>
                <td>{deck.author.name}</td>
                <td>
                  <Button
                    onClick={() => {
                      deleteDeck({ id: deck.id })
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
