import { useState } from 'react'

import cs from '../forms.module.scss'

import { EditNameForm } from './EditNameForm.tsx'
import s from './personalInformation.module.scss'
import { PersonalPhoto } from './PersonalPhoto.tsx'
import { ShowInfo } from './ShowInfo.tsx'

import { EditNameFormType } from '@/components'
import { Card, Typography } from '@/components/ui'

type Props = {
  updatePhoto: (file64: string) => void
  updateUserName: (userName: string) => void
  logout: () => void
}

export const PersonalInformation = ({ updatePhoto, updateUserName, logout }: Props) => {
  const [isShowMode, setIsShowMode] = useState(true)
  //mock value
  const photoUrl = ''
  const userName = 'UserName'
  const userEmail = 'user@mail.com'

  // const logoutCallBack = () => logout()

  const editNameIconHandler = () => setIsShowMode(false)

  const updatePhotoCallBack = (file: File) => {
    const reader = new FileReader()

    reader.onloadend = () => {
      const file64 = reader.result as string

      //dispatch thunk updatePhoto
      updatePhoto(file64)
    }
    reader.readAsDataURL(file)
  }

  const updateUserNameCallBack = (data: EditNameFormType) => {
    //dispatch thunk updateUserName
    updateUserName(data.name)
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
          logoutHandler={logout}
        />
      ) : (
        <EditNameForm defaultNameValue={userName} submitHandler={updateUserNameCallBack} />
      )}
    </Card>
  )
}
