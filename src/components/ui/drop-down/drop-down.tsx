import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import ava from '../../../assets/img/ava.jpg'

import s from './drop-down.module.scss'

export const DropDown = () => {
  return (
    <div className={s.dropDownContainer}>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className={s.trigger}>
          <img className={s.imgHeader} src={ava} alt={'user'} />
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal className={s.portal}>
          <DropdownMenu.Content className={s.content}>
            <DropdownMenu.Item>Log out</DropdownMenu.Item>
            <DropdownMenu.Item>Change ava</DropdownMenu.Item>
            <DropdownMenu.Item>Test</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  )
}
