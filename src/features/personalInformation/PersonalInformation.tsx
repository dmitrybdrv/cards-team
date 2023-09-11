import { useState } from 'react'

import avatarPlacehodler from '../../common/assets/img/avatarPlaceholder.png'
import { Card, Typography } from '../../components/ui'
import cs from '../commonFeatures.module.scss'

import { EditNameForm, EditNameFormType } from './EditNameForm.tsx'
import s from './personalInformation.module.scss'
import { ShowInfo } from './ShowInfo.tsx'

export const PersonalInformation = ({}) => {
  const [isShowMode, setIsShowMode] = useState(true)
  const userName = 'UserName'
  const userEmail = 'user@mail.com'

  const logoutCallBack = () => console.log('logout')

  const editNameIconHandler = () => setIsShowMode(false)

  const updateUserNameCallBack = (data: EditNameFormType) => {
    console.log(data)
    setIsShowMode(true)
  }

  return (
    <Card className={s.cardWrapper}>
      <Typography variant={'large'} className={cs.header}>
        Personal Information
      </Typography>
      <div className={s.avatarBox}>
        <img src={avatarPlacehodler} alt="avatar" className={s.avatarImg} width={96} height={96} />
      </div>
      {isShowMode ? (
        <ShowInfo
          userEmail={userEmail}
          userName={userName}
          editNameIconHandler={editNameIconHandler}
          logoutHandler={logoutCallBack}
        />
      ) : (
        <EditNameForm defaultNameValue={userName} submitHandler={updateUserNameCallBack} />
      )}
    </Card>
  )
}
