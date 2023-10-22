import { FC, memo, useEffect } from 'react'

import { useForm } from 'react-hook-form'

import { Button, TextField } from '@/components'
import { Modal } from '@/components/layout/forms'
import { ModalButton } from '@/components/layout/forms/modal/modalButton.tsx'
import { ModalClose } from '@/components/layout/forms/modal/modalClose.tsx'
import { ModalContent } from '@/components/layout/forms/modal/modalContent.tsx'
import { ModalField } from '@/components/layout/forms/modal/modalField.tsx'
import { ModalTitle } from '@/components/layout/forms/modal/modalTitle.tsx'
import { ControlledCheckbox } from '@/components/ui/checkbox/ControlledCheckbox.tsx'
import s from '@/pages/decks-page/decks.module.scss'
import { CurrentDeckData, ModalVariant } from '@/pages/decks-page/hook/useDeckModalState.ts'
import { getModalTitles } from '@/pages/decks-page/utils/getModalTitles.ts'
import { useCreateDeckMutation, useDeleteDecksMutation } from '@/services/decks/decks.service.ts'
import { CreateDeckArgs } from '@/services/decks/decks.types.ts'

export type ModalsProps = {
  isOpenModal: boolean
  setIsOpenModal: (isOpen: boolean) => void
  variant: ModalVariant
  currentDeckData: CurrentDeckData
}
export const DecksCUDModals: FC<ModalsProps> = memo(
  ({ isOpenModal, setIsOpenModal, variant, currentDeckData }) => {
    const currentInputValue =
      variant === 'updateDeck' && currentDeckData.name ? currentDeckData.name : ''

    const {
      // formState: { errors },
      register,
      handleSubmit,
      control,
      reset,
    } = useForm<CreateDeckArgs>({
      defaultValues: {
        name: currentInputValue,
      },
      values: {
        name: currentInputValue,
      },
    })
    const [createDeck, { isSuccess: isSuccessCreate, isLoading: isLoadingCreate }] =
      useCreateDeckMutation()
    const [deleteDeck, { isSuccess: isSuccessDelete, isLoading: isLoadingDelete }] =
      useDeleteDecksMutation()
    const isSuccess = isSuccessCreate || isSuccessDelete
    const isLoading = isLoadingCreate || isLoadingDelete
    const deleteHandler = () => currentDeckData.id && deleteDeck({ id: currentDeckData.id })

    useEffect(() => {
      if (isSuccess) {
        setIsOpenModal(false)
        reset({ name: '' })
      }
    }, [isSuccess, isLoading])

    const titleData = getModalTitles(variant)
    const formForCreateOrUpdate = (
      <form onSubmit={handleSubmit(createDeck)}>
        {/*TODO add input for loading cover*/}
        <TextField
          autoFocus
          {...register('name')}
          label={'Name Deck'}
          placeholder={'Name'}
          className={s.nameInput}
        />
        <ControlledCheckbox
          control={control}
          defaultValue={true}
          label={'Private deck'}
          name={'isPrivate'}
          className={s.checkboxIsPrivate}
        />
        <ModalButton>
          <Button variant={'secondary'} onClick={() => setIsOpenModal(false)} type={'button'}>
            Close
          </Button>
          <Button variant={'primary'} type={'submit'} disabled={isLoading}>
            {titleData.buttonTitle}
          </Button>
        </ModalButton>
      </form>
    )
    const deletingContent = (
      <>
        <span className={s.deleteText}>
          Do you really want to remove {currentDeckData.name}? All cards will be deleted.
        </span>
        <ModalButton>
          <Button variant={'secondary'} onClick={() => setIsOpenModal(false)} type={'button'}>
            Close
          </Button>
          <Button variant={'primary'} type={'submit'} disabled={isLoading} onClick={deleteHandler}>
            {titleData.buttonTitle}
          </Button>
        </ModalButton>
      </>
    )
    const mainContent = variant === 'deleteDeck' ? deletingContent : formForCreateOrUpdate

    return (
      <Modal isOpen={isOpenModal} onOpenChange={setIsOpenModal}>
        <ModalContent>
          <ModalTitle>{titleData.title}</ModalTitle>
          <ModalClose>X</ModalClose>
          <ModalField>{mainContent}</ModalField>
        </ModalContent>
      </Modal>
    )
  }
)
