import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import ava from '../../../assets/img/ava.jpg'

import s from './drop-down.module.scss'

export const DropDown = () => {
  return (
    <div className={s.container}>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className={s.trigger}>
          <img className={s.imgHeader} src={ava} alt={'user'} />
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content className={s.content}>
            <DropdownMenu.Item className={s.item}>Log out</DropdownMenu.Item>
            <DropdownMenu.Item className={s.item}> Change ava</DropdownMenu.Item>
            <DropdownMenu.Item className={s.item}>Test</DropdownMenu.Item>
            <DropdownMenu.Arrow className={s.arrowBox}>
              <div className={s.arrow} />
            </DropdownMenu.Arrow>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  )
}
