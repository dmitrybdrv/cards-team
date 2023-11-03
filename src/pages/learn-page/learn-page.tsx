import { FC, useLayoutEffect, useRef, useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom'

import { ReactComponent as ArrowBack } from '../../assets/icons/arrow-back-outline.svg'

import s from './learnPage.module.scss'

import { Button, Card, Skeleton, Typography } from '@/components'
import { CardAnswer } from '@/pages/learn-page/cardAnswer.tsx'
import { CardHeader } from '@/pages/learn-page/cardHeader.tsx'
import {
  useGetCardQuery,
  useGetDeckQuery,
  useUpdateGradeCardMutation,
} from '@/services/cards/cards.service.ts'

export const LearnPage: FC = () => {
  const { deckId } = useParams()
  const navigate = useNavigate()

  if (!deckId) return <h1>Deck not found</h1>

  const {
    data: deckData,
    isSuccess: isSuccessGetDeck,
    isLoading: isLoadingGetDeck,
  } = useGetDeckQuery(deckId)

  //redirect if the deck has not cards
  if (deckData?.cardsCount === 0) navigate(`/deck/${deckId}`)
  //get card and update
  const { data: cardData, isSuccess: isSuccessGetCard } = useGetCardQuery(deckId)
  const [updateGradeCard, { isLoading: isLoadingUpdateCard }] = useUpdateGradeCardMutation()

  const [isShowAnswer, setIsShowAnswer] = useState(false)
  const [gradeValue, setGradeValue] = useState(1)
  //skeleton
  const [skeletonHeight, setSkeletonHeight] = useState(587)
  const cardRef = useRef<null | HTMLTableSectionElement>(null)

  useLayoutEffect(() => {
    if (cardRef.current?.offsetHeight) {
      setSkeletonHeight(cardRef.current?.offsetHeight)
    }
  }, [isShowAnswer])

  //callbacks
  const onShowAnswer = () => setIsShowAnswer(true)
  const onNextQuestion = () => {
    if (cardData?.id) {
      updateGradeCard({ cardId: cardData.id, id: deckId, grade: gradeValue })
        .unwrap()
        .then(() => {
          setIsShowAnswer(false)
        })
    }
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
        <Card ref={cardRef}>
          {/*TODO show images*/}
          <CardHeader deckName={deckData?.name} cardData={cardData} />
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
      <Skeleton
        className={s.skeleton}
        isLoading={isLoadingGetDeck}
        isFetching={isLoadingUpdateCard}
        currentHeight={skeletonHeight}
      />
    </div>
  )
}
