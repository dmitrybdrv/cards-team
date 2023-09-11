import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { updateNameSchema } from '../../common/utils'
import { Button, TextField, Typography } from '../../components/ui'

import s from './personalInformation.module.scss'

export type EditNameFormType = {
  name: string
}

type Props = {
  defaultNameValue: string
  submitHandler: (data: EditNameFormType) => void
}

export const EditNameForm = ({ defaultNameValue, submitHandler }: Props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<EditNameFormType>({
    defaultValues: { name: defaultNameValue },
    resolver: zodResolver(updateNameSchema),
  })

  const onSubmit = (data: EditNameFormType) => {
    submitHandler(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
      <TextField
        {...register('name')}
        error={errors.name}
        label={'NikName'}
        placeholder={'NikName'}
        className={s.txf}
      />
      <Button className={s.btn} fullWidth={true}>
        <Typography variant={'subtitle2'}>Save Changes</Typography>
      </Button>
    </form>
  )
}
