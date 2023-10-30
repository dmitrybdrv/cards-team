import { FC } from 'react'

import { Typography } from '@/components'
import s from '@/pages/learn-page/learnPage.module.scss'

type Props = {
  name: string
  question: string
  shots: number
}

export const CardHeader: FC<Props> = ({ shots, question, name }) => {
  return (
    <>
      <Typography variant={'large'} className={s.title}>
        Learn &quot;{name}&quot;
      </Typography>
      <Typography variant={'subtitle1'} className={s.question}>
        Question: <Typography variant={'body1'}>{question}</Typography>
      </Typography>
      <Typography variant={'body2'} className={s.shots}>
        Количество попыток ответов на вопрос: <span className={s.shotsCount}>{shots}</span>
      </Typography>
    </>
  )
}
