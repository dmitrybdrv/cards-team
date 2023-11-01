import { FC, useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom'

import { ReactComponent as ArrowBack } from '../../assets/icons/arrow-back-outline.svg'

import s from './learnPage.module.scss'

import { Button, Card, Radio, Typography } from '@/components'
import { CardHeader } from '@/pages/learn-page/cardHeader.tsx'
import { radioValues } from '@/pages/learn-page/enums/enums.ts'
import {
  useGetCardQuery,
  useGetDeckQuery,
  useUpdateGradeCardMutation,
} from '@/services/cards/cards.service.ts'

export const LearnPage: FC = () => {
  const { deckId } = useParams()
  const navigate = useNavigate()

  if (!deckId) return <h1>Deck not found</h1>

  const { data: deckData, isSuccess: isSuccessGetDeck, isLoading } = useGetDeckQuery(deckId)

  //redirect if the deck has not cards
  if (deckData?.cardsCount === 0) navigate(`/deck/${deckId}`)
  const [updateGradeCard] = useUpdateGradeCardMutation()
  const { data: cardData, isSuccess: isSuccessGetCard } = useGetCardQuery(deckId)

  const [isShowAnswer, setIsShowAnswer] = useState(false)
  const [gradeValue, setGradeValue] = useState(1)
  const onShowAnswer = () => setIsShowAnswer(true)
  const onNextQuestion = () => {
    if (cardData?.id) {
      updateGradeCard({ cardId: cardData.id, id: deckId, grade: gradeValue })
    }
    setIsShowAnswer(false)
  }
  const clickBtnHandler = isShowAnswer ? onNextQuestion : onShowAnswer
  const btnTitle = isShowAnswer ? 'Next Question' : 'Show Answer'

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
          <CardAnswer
            isShowAnswer={isShowAnswer}
            answer={cardData.answer}
            gradeValue={gradeValue}
            setGradeValue={setGradeValue}
          />
          {/*-----button*/}
          <Button variant={'primary'} fullWidth={true} onClick={clickBtnHandler}>
            {btnTitle}
          </Button>
        </Card>
      )}
      {/*TODO enable skeleton if start fetching, create custom hooks*/}
      {/*skeleton*/}
    </div>
  )
}

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
