import { FC } from 'react'

import { Radio, Typography } from '@/components'
import { radioValues } from '@/pages/learn-page/enums/enums.ts'
import s from '@/pages/learn-page/learnPage.module.scss'

export type CardAnswerProps = {
  answer: string
  gradeValue: number
  setGradeValue: (value: number) => void
  isShowAnswer: boolean
}
export const CardAnswer: FC<CardAnswerProps> = ({
  answer,
  gradeValue,
  setGradeValue,
  isShowAnswer,
}) => {
  if (isShowAnswer) {
    return (
      <>
        <Typography variant={'subtitle1'} className={s.answer}>
          Answer: <Typography variant={'body1'}>{answer}</Typography>
        </Typography>
        <Typography variant={'subtitle1'} className={s.rateYouself}>
          Rate yourself:
        </Typography>
        <Radio data={radioValues} value={gradeValue} onChange={setGradeValue} className={s.radio} />
      </>
    )
  }
}
