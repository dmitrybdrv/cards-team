import { FC, memo } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { createCardSchema } from '@/common/utils'
import { Button, TextField } from '@/components'
import { Modal } from '@/components/layout/forms'
import { ModalButton } from '@/components/layout/forms/modal/modalButton.tsx'
import { ModalClose } from '@/components/layout/forms/modal/modalClose.tsx'
import { ModalContent } from '@/components/layout/forms/modal/modalContent.tsx'
import { ModalField } from '@/components/layout/forms/modal/modalField.tsx'
import { ModalTitle } from '@/components/layout/forms/modal/modalTitle.tsx'
import { useCUDCards } from '@/pages/cards-page/hooks/useCUDCards.ts'
import { cardsGetModalTitles } from '@/pages/cards-page/utils/CardsGetModalTitles.ts'
import s from '@/pages/decks-page/decks.module.scss'
import { CardModalVariant, CurrentCardData } from '@/services/cards/cards.types.ts'

export type CardsModalsProps = {
  isOpenCardModal: boolean
  setIsOpenCardModal: (isOpen: boolean) => void
  variant: CardModalVariant
  currentCardData: CurrentCardData
}

export const CardsCUDModals: FC<CardsModalsProps> = memo(
  ({ isOpenCardModal, setIsOpenCardModal, variant, currentCardData }) => {
    /*const currentCardFormValue =
              variant === 'updateCard' && currentCardData.question ? currentCardData.question : ''*/

    const {
      formState: { errors },
      register,
      handleSubmit,
      reset,
      // setError,
      // watch,
    } = useForm<CurrentCardData>({
      defaultValues: {
        id: 'clodas1xm19d2vo2qv0wf33fl',
        question: currentCardData.question,
        answer: currentCardData.answer,
      },
      values: {
        id: 'clodas1xm19d2vo2qv0wf33fl',
        question: currentCardData.question,
        answer: currentCardData.answer,
        questionVideo: 'xxx',
        answerVideo: 'xxx',
        answerImg: '',
        questionImg: '',
      },
      resolver: zodResolver(createCardSchema),
    })

    const { createCard, updateCard, deleteCard, isLoading } = useCUDCards(
      currentCardData,
      setIsOpenCardModal,
      reset
    )

    console.log(currentCardData)

    const onSubmit = variant === 'createCard' ? createCard : updateCard

    const titleData = cardsGetModalTitles(variant)

    //-----JSX-----
    //  Create Card or Update Card
    const formCardCreateOrUpdate = (
      <form onSubmit={handleSubmit(onSubmit)}>
        {/*<SelectC values={'Text'} onValueChange={} />*/}
        <TextField
          autoFocus
          {...register('question')}
          label={'Question'}
          placeholder={'Question'}
          className={s.nameInput}
          error={errors.question}
        />
        <TextField
          {...register('answer')}
          label={'Answer'}
          placeholder={'Answer'}
          className={s.nameInput}
          error={errors.answer}
        />
        <ModalButton>
          <Button variant={'secondary'} onClick={() => setIsOpenCardModal(false)} type={'button'}>
            Close
          </Button>
          <Button variant={'primary'} type={'submit'} disabled={isLoading}>
            {titleData.buttonTitle}
          </Button>
        </ModalButton>
      </form>
    )

    //  Delete Card
    const deletingContent = (
      <>
        <span className={s.deleteText}>
          Do you really want to remove {'Имя карточки'}? The card will be deleted.
        </span>
        <ModalButton>
          <Button variant={'secondary'} onClick={() => setIsOpenCardModal(false)} type={'button'}>
            Close
          </Button>
          <Button variant={'primary'} type={'submit'} disabled={isLoading} onClick={deleteCard}>
            {titleData.buttonTitle}
          </Button>
        </ModalButton>
      </>
    )

    const mainContent = variant === 'deleteCard' ? deletingContent : formCardCreateOrUpdate

    return (
      <Modal isOpen={isOpenCardModal} onOpenChange={setIsOpenCardModal}>
        <ModalContent>
          <ModalTitle>{titleData.title}</ModalTitle>
          <ModalClose>X</ModalClose>
          <ModalField>{mainContent}</ModalField>
        </ModalContent>
      </Modal>
    )
  }
)
