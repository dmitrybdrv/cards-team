import { FC } from 'react'

import { useNavigate, useParams } from 'react-router-dom'

import { ReactComponent as ArrowBack } from '../../assets/icons/arrow-back-outline.svg'

import s from './learnPage.module.scss'

import { Card, Typography } from '@/components'
import { useGetCardQuery, useGetDeckQuery } from '@/services/deck/cards.service.ts'

export const LearnPage: FC = () => {
  const { deckId } = useParams()
  const navigate = useNavigate()

  const { data: deckData, isSuccess, isLoading } = useGetDeckQuery(deckId ?? '')
  const { data: cardData } = useGetCardQuery(deckId ?? '')

  if (isSuccess)
    return (
      <div className={s.pageWrapper}>
        <div className={s.linkBackWrapper} onClick={() => navigate(-1)}>
          <ArrowBack />
          <Typography variant={'body2'}>Back</Typography>
        </div>
        <Card>
          <Typography variant={'large'} className={s.title}>
            Learn &quot;{deckData.name}&quot;
          </Typography>
          <Typography variant={'subtitle1'} className={s.question}>
            Question: <Typography variant={'body1'}>{cardData?.question}</Typography>
          </Typography>
          <Typography variant={'body2'} className={s.shots}>
            Количество попыток ответов на вопрос:{' '}
            <span className={s.shotsCount}>{cardData?.shots}</span>
          </Typography>
        </Card>
      </div>
    )
}
