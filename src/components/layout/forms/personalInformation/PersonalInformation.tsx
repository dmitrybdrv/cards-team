import { useState } from 'react'

import cs from '../forms.module.scss'

import { EditNameForm } from './EditNameForm.tsx'
import s from './personalInformation.module.scss'
import { PersonalPhoto } from './PersonalPhoto.tsx'
import { ShowInfo } from './ShowInfo.tsx'

import { useToast } from '@/common/utils/toast.ts'
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
  const { showToast } = useToast()

  const [isShowMode, setIsShowMode] = useState(true)

  const logoutCallBack = () => logout()

  const editNameIconHandler = () => setIsShowMode(false)

  const updatePhotoCallBack = (data: File) => {
    const formData = new FormData()

    formData.append('avatar', data)
    updateProfile(formData as UpdateProfile)
      .unwrap()
      .then(() => {
        showToast(`Photo has been changed`, 'success')
      })
      .catch(error => {
        console.log(error)

        showToast(`Something goes wrong`, 'error')
      })
  }

  const updateUserNameCallBack = (data: UpdateProfile) => {
    updateProfile(data)
      .unwrap()
      .then(() => {
        showToast(`User name has been changed`, 'success')
      })
      .catch(error => {
        console.log(error)
        showToast(`Something goes wrong`, 'error')
      })
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
