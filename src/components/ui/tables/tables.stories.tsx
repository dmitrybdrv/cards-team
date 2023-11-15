import { Meta, StoryObj } from '@storybook/react'

import testImg from '@/assets/img/avatarPlaceholder.png'
import { Sort, Table, TdCell, TdIcons, TdRating, THead, TRow } from '@/components/ui'
import { friendsColumnsTitles, myColumnsTitles } from '@/pages/cards-page/cards-page.tsx'
import { decksColumnsTitles } from '@/pages/decks-page'

const meta = {
  title: 'Components/UI/Tables/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description:
        'Вариант таблицы, от которого зависят ширины колонок (зависимость захардкодена в стилях)',
    },
  },
} satisfies Meta<typeof Table>

type Story = StoryObj<typeof Table>

export default meta

export const PacksTable: Story = {
  args: {
    variant: 'packs',
  },
  render: args => {
    const mappedRow = new Array(10).fill(null).map((_e, i) => {
      return (
        <TRow key={i}>
          <TdCell img={testImg}>TitleName</TdCell>
          <TdCell>cardsCount</TdCell>
          <TdCell>updated</TdCell>
          <TdCell>createdBy</TdCell>
          <TdIcons
            onPlay={() => console.log('play')}
            onEdit={() => console.log('edit')}
            onDelete={() => console.log('delete')}
          />
        </TRow>
      )
    })

    const currentSort: Sort = {
      orderName: null,
      direction: null,
    }

    return (
      <Table variant={args.variant}>
        <THead columns={decksColumnsTitles} onSort={() => {}} currentSort={currentSort} />
        <tbody>{mappedRow}</tbody>
      </Table>
    )
  },
}

export const MyCardsTable: Story = {
  args: {
    variant: 'myCards',
  },
  render: args => {
    const mappedRow = new Array(10).fill(null).map((_e, i) => {
      return (
        <TRow key={i}>
          <TdCell>Question</TdCell>
          <TdCell>Answer</TdCell>
          <TdCell>updated</TdCell>
          <TdRating rating={4} />
          <TdIcons onEdit={() => console.log('edit')} onDelete={() => console.log('delete')} />
        </TRow>
      )
    })

    const currentSort: Sort = {
      orderName: null,
      direction: null,
    }

    return (
      <Table variant={args.variant}>
        <THead columns={myColumnsTitles} onSort={() => {}} currentSort={currentSort} />
        <tbody>{mappedRow}</tbody>
      </Table>
    )
  },
}

export const CardsTable: Story = {
  args: {
    variant: 'cards',
  },
  render: args => {
    const mappedRow = new Array(10).fill(null).map((_e, i) => {
      return (
        <TRow key={i}>
          <TdCell>Question</TdCell>
          <TdCell>Answer</TdCell>
          <TdCell>updated</TdCell>
          <TdRating rating={4} />
        </TRow>
      )
    })

    const currentSort: Sort = {
      orderName: null,
      direction: null,
    }

    return (
      <Table variant={args.variant}>
        <THead columns={friendsColumnsTitles} onSort={() => {}} currentSort={currentSort} />
        <tbody>{mappedRow}</tbody>
      </Table>
    )
  },
}
