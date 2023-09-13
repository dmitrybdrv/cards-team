import { CheckEmail } from './features/check-email'
import { PersonalInformation } from './features/personalInformation/PersonalInformation.tsx'

export function App() {
  return (
    <div>
      <PersonalInformation />
      <CheckEmail />
    </div>
  )
}
