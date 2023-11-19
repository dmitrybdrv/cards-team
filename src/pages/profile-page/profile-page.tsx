import { useNavigate } from 'react-router-dom'

import { ReactComponent as ArrowBack } from '@/assets/icons/arrow-back-outline.svg'
import { PersonalInformation, Typography } from '@/components'
import s from '@/pages/cards-page/cards.module.scss'

//TODO make story for storybook
export const ProfilePage = ({}) => {
  const navigate = useNavigate()

  return (
    <div className={s.pageWrapper}>
      <div className={s.linkArrowContainer} onClick={() => navigate(-1)}>
        <ArrowBack />
        <Typography variant={'body2'}>Back to Deck List</Typography>
      </div>
      <PersonalInformation />
    </div>
  )
}
