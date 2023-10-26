import { ChangeEvent, useState } from 'react'

export const ImageInput = () => {
  const [image, setImage] = useState<string | null>(null)

  const onChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      const file = e.currentTarget.files[0]
      const reader = new FileReader()

      reader.readAsDataURL(file)

      reader.onload = function () {
        const image64 = reader.result as string

        setImage(image64)
      }
    }
  }

  return (
    <div>
      {image && <img src={image} alt="#" width={200} />}
      <input type="file" onChange={onChangeImage} accept="image/png, image/jpeg" />
    </div>
  )
}
