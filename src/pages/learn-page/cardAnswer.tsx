import { FC } from 'react'

import { Radio, Typography } from '@/components'
import { radioValues } from '@/pages/learn-page/enums/enums.ts'
import s from '@/pages/learn-page/learnPage.module.scss'
import { CardResponse } from '@/services/cards/cards.types.ts'

export type CardAnswerProps = {
  cardData: CardResponse
  gradeValue: number
  setGradeValue: (value: number) => void
}
export const CardAnswer: FC<CardAnswerProps> = ({
  cardData: { answer, answerImg },
  gradeValue,
  setGradeValue,
}) => {
  const renderAnswerImg = answerImg && <img alt={'#'} src={answerImg} className={s.questionImg} />

  return (
    <>
      <Typography variant={'subtitle1'} className={s.answer}>
        Answer: <Typography variant={'body1'}>{answer}</Typography>
      </Typography>
      {renderAnswerImg}
      <Typography variant={'subtitle1'} className={s.rateYouself}>
        Rate yourself:
      </Typography>
      <Radio data={radioValues} value={gradeValue} onChange={setGradeValue} className={s.radio} />
    </>
  )
}
