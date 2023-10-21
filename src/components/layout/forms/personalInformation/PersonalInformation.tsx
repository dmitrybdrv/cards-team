import { useState } from 'react'

import cs from '../forms.module.scss'

import { EditNameForm } from './EditNameForm.tsx'
import s from './personalInformation.module.scss'
import { PersonalPhoto } from './PersonalPhoto.tsx'
import { ShowInfo } from './ShowInfo.tsx'

import { EditNameFormType } from '@/components'
import { Card, Typography } from '@/components/ui'
import {
  useGetMeQuery,
  useLogoutMutation,
  useUpdateProfileMutation,
} from '@/services/auth/auth.service.ts'

export const PersonalInformation = () => {
  const [logout] = useLogoutMutation()
  const { data } = useGetMeQuery()
  const [updateProfile] = useUpdateProfileMutation()

  const [isShowMode, setIsShowMode] = useState(true)
  //mock value
  const photoUrl = data.avatar ? data.avatar : ''
  const userName = data.name ? data.name : 'UserName'
  const userEmail = data.email ? data.email : 'user@mail.com'

  const logoutCallBack = () => logout

  const editNameIconHandler = () => setIsShowMode(false)

  const updatePhotoCallBack = (file: File) => {
    //const reader = new FileReader()

    const formData = new FormData()

    formData.append('avatar', file)

    updateProfile(formData)

    /*reader.onloadend = () => {
                              /!*const file64 = reader.result as string*!/
                             /!*dispatch thunk updatePhoto*!/
                            }*/
    /*reader.readAsDataURL(file)*/
  }

  const updateUserNameCallBack = (data: EditNameFormType) => {
    //dispatch thunk updateUserName
    //updateUserName(data.name)
    updateProfile(data)
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
