import { ReactComponent as LogoutIcon } from './assets/icons/logout.svg'
import { ReactComponent as PersonOutlineIcon } from './assets/icons/person-outline-icon.svg'
import { AvaDropDown } from './assets/icons-component'
import { Dropdown, ToolbarItemWithIcon } from './components'
import { TextSeparator } from './components/ui/drop-down/textSeparator.tsx'

export function App() {
  return (
    <div>
      {' '}
      <Dropdown>
        <ToolbarItemWithIcon
          text={<TextSeparator />}
          icon={<AvaDropDown />}
          onSelect={() => {}}
        ></ToolbarItemWithIcon>
        <ToolbarItemWithIcon
          text={'My Profile'}
          icon={<PersonOutlineIcon />}
          onSelect={() => {}}
        ></ToolbarItemWithIcon>
        <ToolbarItemWithIcon
          text={'Sign Out'}
          icon={<LogoutIcon />}
          onSelect={() => {}}
        ></ToolbarItemWithIcon>
      </Dropdown>
    </div>
  )
}
