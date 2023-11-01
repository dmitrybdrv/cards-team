import { FC, memo } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { createCardSchema } from '@/common/utils'
import { Button, SelectC, TextField } from '@/components'
import { Modal } from '@/components/layout/forms'
import { ModalButton } from '@/components/layout/forms/modal/modalButton.tsx'
import { ModalClose } from '@/components/layout/forms/modal/modalClose.tsx'
import { ModalContent } from '@/components/layout/forms/modal/modalContent.tsx'
import { ModalField } from '@/components/layout/forms/modal/modalField.tsx'
import { ModalTitle } from '@/components/layout/forms/modal/modalTitle.tsx'
import { ImageInput } from '@/components/ui/imageInput/imageInput.tsx'
import { useCUDCards } from '@/pages/cards-page/hooks/useCUDCards.ts'
import { cardsGetModalTitles } from '@/pages/cards-page/utils/CardsGetModalTitles.ts'
import s from '@/pages/decks-page/decks.module.scss'
import { CardModalVariant, CreateCardArgs, CurrentCardData } from '@/services/cards/cards.types.ts'

export type CardsModalsProps = {
  isOpenCardModal: boolean
  setIsOpenCardModal: (isOpen: boolean) => void
  variant: CardModalVariant
  currentCardData: CurrentCardData
}

export const CardsCUDModals: FC<CardsModalsProps> = memo(
  ({ isOpenCardModal, setIsOpenCardModal, variant, currentCardData }) => {
    const currentQuestionInputValue =
      variant === 'updateCard' && currentCardData.question ? currentCardData.question : ''

    const {
      formState: { errors },
      register,
      handleSubmit,
      control,
      reset,
      // setError,
      // watch,
    } = useForm<CreateCardArgs>({
      defaultValues: {
        question: currentQuestionInputValue,
      },
      values: {
        question: currentQuestionInputValue,
        answer: 'answer',
        questionVideo: '',
        answerVideo: '',
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

    const onSubmit = variant === 'createCard' ? createCard : updateCard

    const titleData = cardsGetModalTitles(variant)

    //-----JSX-----
    //  Create Deck or Update Deck
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
          Do you really want to remove {currentCardData.name}? The card will be deleted.
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
