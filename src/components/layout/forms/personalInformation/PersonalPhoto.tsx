import { ChangeEvent } from 'react'

import s from './personalInformation.module.scss'

import { ReactComponent as EditPen } from '@/assets/icons/editPen.svg'
import photoPlaceHolder from '@/assets/img/avatarPlaceholder.png'

type PersonalPhotoProps = {
  isShowMode: boolean
  photoSrc: string
  updatePhoto: (file: File) => void
}
export const PersonalPhoto = ({ isShowMode, photoSrc, updatePhoto }: PersonalPhotoProps) => {
  const changeFileHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      updatePhoto(e.currentTarget.files[0])
    }
  }

  return (
    <div className={s.photoBox}>
      <img
        src={photoSrc || photoPlaceHolder}
        alt="user avatar"
        className={s.photoImg}
        width={96}
        height={96}
      />
      {isShowMode && (
        <label className={s.updatePhotoBox}>
          <input type="file" onChange={changeFileHandler} accept="image/png, image/jpeg" />
          <EditPen className={s.updatePhotoIcon} />
        </label>
      )}
    </div>
  )
}
