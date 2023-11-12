import { FC } from 'react'

import { Button, Typography } from '@/components'
import s from '@/pages/cards-page/empty-deck-page/empty-deck-page.module.scss'

type Props = {
  deckTitle?: string | undefined
  isAuthorDeck: boolean
  onClickAddCard: () => void
}

export const EmptyDeckPage: FC<Props> = ({ deckTitle, isAuthorDeck, onClickAddCard }) => {
  return (
    <div className={s.pageWrapper}>
      {/*<Typography variant={'large'}>{deckTitle}</Typography>*/}
      {isAuthorDeck ? (
        <>
          <div className={s.textWrapper}>
            <Typography variant={'body1'} className={s.textWrapper}>
              This pack is empty. Click add card to fill this pack.
            </Typography>
          </div>
          <div className={s.buttonWrapper}>
            <Button variant={'primary'} onClick={onClickAddCard}>
              <Typography variant={'subtitle2'}>Add Card</Typography>
            </Button>
          </div>
        </>
      ) : (
        <div className={s.textWrapper}>
          <Typography variant={'body1'} className={s.textWrapper}>
            This pack is empty. Please wait until your friend add some cards here.
          </Typography>
        </div>
      )}
    </div>
  )
}
