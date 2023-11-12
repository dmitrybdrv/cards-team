import { FC } from 'react'

import { Typography } from '@/components'
import s from '@/pages/learn-page/learnPage.module.scss'
import { CardResponse } from '@/services/cards/cards.types.ts'

type Props = {
  deckName: string
  cardData: CardResponse
}

export const CardHeader: FC<Props> = ({ deckName, cardData: { questionImg, question, shots } }) => {
  const renderTextQuestion = question && <Typography variant={'body1'}>{question}</Typography>

  const renderImgQuestion = questionImg && (
    <img alt={'#'} src={questionImg} className={s.questionImg} />
  )

  return (
    <>
      <Typography variant={'large'} className={s.title}>
        Learn &quot;{deckName}&quot;
      </Typography>
      {/*--------Question-----------*/}
      <Typography variant={'subtitle1'} className={s.question}>
        Question: {renderTextQuestion}
      </Typography>
      {/*-----------Image-----------*/}
      {renderImgQuestion}
      {/*-----------Shots-----------*/}
      <Typography variant={'body2'} className={s.shots}>
        Количество попыток ответов на вопрос: <span className={s.shotsCount}>{shots}</span>
      </Typography>
    </>
  )
}
