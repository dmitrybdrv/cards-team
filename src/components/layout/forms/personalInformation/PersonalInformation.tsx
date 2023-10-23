import { useState } from 'react'

import cs from '../forms.module.scss'

import { EditNameForm } from './EditNameForm.tsx'
import s from './personalInformation.module.scss'
import { PersonalPhoto } from './PersonalPhoto.tsx'
import { ShowInfo } from './ShowInfo.tsx'

import { Card, Typography } from '@/components/ui'
import {
  useGetMeQuery,
  useLogoutMutation,
  useUpdateProfileMutation,
} from '@/services/auth/auth.service.ts'
import { UpdateProfile } from '@/services/auth/auth.types.ts'

export const PersonalInformation = () => {
  const [logout] = useLogoutMutation()
  const { data } = useGetMeQuery()
  const [updateProfile] = useUpdateProfileMutation()

  const [isShowMode, setIsShowMode] = useState(true)

  const logoutCallBack = () => logout()

  const editNameIconHandler = () => setIsShowMode(false)

  const updatePhotoCallBack = (data: File) => {
    const formData = new FormData()

    formData.append('avatar', data)
    updateProfile(formData as UpdateProfile)
  }

  const updateUserNameCallBack = (data: UpdateProfile) => {
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
        photoSrc={data.avatar}
        updatePhoto={updatePhotoCallBack}
      />
      {isShowMode ? (
        <ShowInfo
          userEmail={data.email}
          userName={data.name}
          editNameIconHandler={editNameIconHandler}
          logoutHandler={logoutCallBack}
        />
      ) : (
        <EditNameForm defaultNameValue={data.name} submitHandler={updateUserNameCallBack} />
      )}
    </Card>
  )
}
