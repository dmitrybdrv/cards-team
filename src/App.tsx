
import { useState } from 'react'

import { useForm } from 'react-hook-form'

import { Radio, TextField } from './components/ui'

export type DataType = DataItem[]

type DataItem = {
  label: string
  value: string
  id: string
}

const data: DataType = [
  { label: 'Female', value: 'women', id: '1' },
  { label: 'Male', value: 'man', id: '2' },
  { label: 'None', value: 'none', id: '3' },
]

type FormType = {
  name: string
  gender: string
}

export function App() {
  const [item, setItem] = useState(data[2].value)
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormType>({
    defaultValues: {
      name: '',
      gender: '',
    },
  })

  const onSubmit = (formData: FormType) => {
    formData.gender = item
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ margin: '50px' }}>
      <TextField {...register('name')} error={errors.name} />
      <Radio {...register('gender')} data={data} value={item} onChange={setItem} />
      <button type={'submit'}>Send</button>
    </form>
import { PersonalInformation } from './features/personalInformation/PersonalInformation.tsx'

import { CheckEmail } from './features/check-email'


export function App() {
  return (
    <div>
      <PersonalInformation />
      <CheckEmail />
    </div>
  )
}
