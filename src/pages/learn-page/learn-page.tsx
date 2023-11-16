import { FC, useLayoutEffect, useRef, useState } from 'react'

import { Navigate, useNavigate, useParams } from 'react-router-dom'

import { ReactComponent as ArrowBack } from '../../assets/icons/arrow-back-outline.svg'

import s from './learnPage.module.scss'

import { Button, Card, Skeleton, Typography } from '@/components'
import { Preloader } from '@/components/layout/preloader/preloader.tsx'
import { CardAnswer } from '@/pages/learn-page/cardAnswer.tsx'
import { CardHeader } from '@/pages/learn-page/cardHeader.tsx'
import {
  useGetCardQuery,
  useGetDeckQuery,
  useUpdateGradeCardMutation,
} from '@/services/cards/cards.service.ts'
import { DecksResponseItem } from '@/services/decks/decks.types.ts'

type Props = {
  deckData: DecksResponseItem
}

export const LearnPageWrapper: FC = () => {
  const { deckId } = useParams()

  if (!deckId) return <h1>Deck not found</h1>

  const { data, isLoading, isSuccess } = useGetDeckQuery(deckId)

  if (isLoading)
    return (
      <div style={{ position: 'fixed', left: 'calc(50% - 50px)', top: '40%' }}>
        <Preloader />
      </div>
    )
  if (isSuccess) {
    return data.cardsCount === 0 ? (
      <Navigate to={`/deck/${deckId}`} />
    ) : (
      <LearnPage deckData={data} />
    )
  }

  return <h1>Something wrong</h1>
}

export const LearnPage: FC<Props> = ({ deckData }) => {
  const deckId = deckData.id
  const navigate = useNavigate()

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

  //get card and update
  const { data: cardData, isSuccess: isSuccessGetCard } = useGetCardQuery(deckId)
  const [updateGradeCard, { isLoading: isLoadingUpdateCard }] = useUpdateGradeCardMutation()

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
      {isSuccessGetCard && (
        <Card ref={cardRef}>
          <CardHeader deckName={deckData?.name} cardData={cardData} />
          {/*-----answer*/}
          {isShowAnswer && (
            <CardAnswer cardData={cardData} gradeValue={gradeValue} setGradeValue={setGradeValue} />
          )}
          {/*-----button*/}
          <Button variant={'primary'} fullWidth={true} onClick={clickBtnHandler}>
            {btnTitle}
          </Button>
        </Card>
      )}
      <Skeleton
        className={s.skeleton}
        isLoading={false}
        isFetching={isLoadingUpdateCard}
        currentHeight={skeletonHeight}
      />
    </div>
  )
}
