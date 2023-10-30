import {FC} from "react";
import {Card, Typography} from "@/components";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useGetDeckQuery} from "@/services/deck/cards.service.ts";
import {ReactComponent as ArrowBack} from '../../assets/icons/arrow-back-outline.svg'

import s from './learnPage.module.scss'

export const LearnPage: FC = () => {
  const {deckId} = useParams()
  const navigate = useNavigate()

  const {data: deckData, isSuccess, isLoading} = useGetDeckQuery(deckId ?? '')

  if (isSuccess)

    return (
      <div className={s.pageWrapper}>
        <div className={s.linkBackWrapper} onClick={() => navigate(-1)}>
          <ArrowBack/>
          <Typography variant={'body2'}>Back</Typography>
        </div>
        <Card>
          <Typography variant={'large'} className={s.title}>
            Learn "{deckData.name}"
          </Typography>
          <div>Hi!</div>
        </Card>
      </div>
    )
}