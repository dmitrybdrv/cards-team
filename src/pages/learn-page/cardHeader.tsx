import { FC } from 'react'

import { Typography } from '@/components'
import s from '@/pages/learn-page/learnPage.module.scss'
import { CardResponse } from '@/services/cards/cards.types.ts'

type Props = {
  deckName: string
  cardData: CardResponse
}

export const CardHeader: FC<Props> = ({ deckName, cardData }) => {
  const questionImg = cardData.questionImg
  const showQuestion = questionImg ? (
    <img alt={'#'} src={questionImg} className={s.questionImg} />
  ) : (
    <Typography variant={'body1'}>{cardData.question}</Typography>
  )

  return (
    <>
      <Typography variant={'large'} className={s.title}>
        Learn &quot;{deckName}&quot;
      </Typography>
      <Typography variant={'subtitle1'} className={s.question}>
        Question: {showQuestion}
      </Typography>
      <Typography variant={'body2'} className={s.shots}>
        Количество попыток ответов на вопрос: <span className={s.shotsCount}>{cardData.shots}</span>
      </Typography>
    </>
  )
}
