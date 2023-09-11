import { useState } from 'react'

import { Card, Typography } from '../../components/ui'
import cs from '../commonFeatures.module.scss'

import { EditNameForm, EditNameFormType } from './EditNameForm.tsx'
import s from './personalInformation.module.scss'
import { PersonalPhoto } from './PersonalPhoto.tsx'
import { ShowInfo } from './ShowInfo.tsx'

export const PersonalInformation = ({}) => {
  const [isShowMode, setIsShowMode] = useState(true)
  //mock value
  const photoUrl = ''
  const userName = 'UserName'
  const userEmail = 'user@mail.com'

  const logoutCallBack = () => console.log('logout')

  const editNameIconHandler = () => setIsShowMode(false)

  const updatePhotoCallBack = (file: File) => {
    const reader = new FileReader()

    reader.onloadend = () => {
      const file64 = reader.result as string

      //dispatch thunk updatePhoto
      console.log('file64: ', file64)
    }
    reader.readAsDataURL(file)
  }

  const updateUserNameCallBack = (data: EditNameFormType) => {
    //dispatch thunk updateUserName
    console.log(data)
    setIsShowMode(true)
  }

  return (
    <Card className={s.cardWrapper}>
      <Typography variant={'large'} className={cs.header}>
        Personal Information
      </Typography>
      <PersonalPhoto
        isShowMode={isShowMode}
        photoSrc={photoUrl}
        updatePhoto={updatePhotoCallBack}
      />
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
