import { useState } from 'react'

import { PersonalInformation } from '@/components'

export const ProfilePage = ({}) => {
  const [newName, setName] = useState('')
  const [photo, setPhoto] = useState('')

  console.log(newName, photo)

  return <PersonalInformation updateUserName={setName} updatePhoto={setPhoto} logout={() => {}} />
}
