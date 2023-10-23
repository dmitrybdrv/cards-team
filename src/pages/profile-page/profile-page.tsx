import { useNavigate } from 'react-router-dom'

import { ReactComponent as BackIcon } from '@/assets/icons/arrowLeft.svg'
import { PersonalInformation } from '@/components'

export const ProfilePage = ({}) => {
  const navigate = useNavigate()

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

      <PersonalInformation />
    </>
  )
}
