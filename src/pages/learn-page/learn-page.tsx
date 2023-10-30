import { FC, useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom'

import { ReactComponent as ArrowBack } from '../../assets/icons/arrow-back-outline.svg'

import s from './learnPage.module.scss'

import { Button, Card, Radio, Typography } from '@/components'
import { CardHeader } from '@/pages/learn-page/cardHeader.tsx'
import { useGetCardQuery, useGetDeckQuery } from '@/services/deck/cards.service.ts'

export const LearnPage: FC = () => {
  const { deckId } = useParams()
  const navigate = useNavigate()

  if (!deckId) return <h1>Deck not found</h1>

  const { data: deckData, isSuccess: isSuccessGetDeck, isLoading } = useGetDeckQuery(deckId)
  const { data: cardData, isSuccess: isSuccessGetCard } = useGetCardQuery(deckId)

  const [isShowAnswer, setIsShowAnswer] = useState(false)
  const onShowAnswer = () => setIsShowAnswer(true)
  const onNextQuestion = () => {
    // post query
    setIsShowAnswer(false)
  }
  const clickBtnHandler = isShowAnswer ? onNextQuestion : onShowAnswer

  return (
    <div className={s.pageWrapper}>
      <div className={s.linkBackWrapper} onClick={() => navigate(-1)}>
        <ArrowBack />
        <Typography variant={'body2'}>Back</Typography>
      </div>
      {/*Check success data*/}
      {isSuccessGetDeck && isSuccessGetCard && (
        <Card>
          <CardHeader name={deckData?.name} shots={cardData?.shots} question={cardData?.question} />
          {/*-----answer*/}
          <Typography variant={'subtitle1'} className={s.answer}>
            Answer: <Typography variant={'body1'}>{cardData.answer}</Typography>
          </Typography>
          <Radio data={[1, 2, 3]} value={1} onChange={() => {}} />
          {/*-----button*/}
          <Button variant={'primary'} fullWidth={true} onClick={clickBtnHandler}>
            Show Answer
          </Button>
        </Card>
      )}
      {/*skeleton*/}
    </div>
  )
}
