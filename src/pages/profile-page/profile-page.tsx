import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { ReactComponent as BackIcon } from '@/assets/icons/arrowLeft.svg'
import { PersonalInformation } from '@/components'
import { useLogoutMutation } from '@/services/auth/auth.service.ts'

export const ProfilePage = ({}) => {
  const [logout] = useLogoutMutation()

  const logoutHandler = () => {
    return logout({})
  }

  const navigate = useNavigate()

  const [newName, setName] = useState('')
  const [photo, setPhoto] = useState('')

  console.log(newName, photo)

  return (
    <>
      <BackIcon
        onClick={() => navigate(-1)}
        style={{
          width: '20px',
          height: '20px',
          marginLeft: '20%',
          marginTop: '1%',
          cursor: 'pointer',
        }}
      />

      <PersonalInformation updateUserName={setName} updatePhoto={setPhoto} logout={logoutHandler} />
    </>
  )
}
