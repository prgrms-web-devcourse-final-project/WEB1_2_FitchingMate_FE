import { Section } from '@pages/ChatRoom/style'

import GeneralUserCard from '../GeneralChatRoom/GeneralUserCard'

const UserListSection = () => {
  return (
    <Section>
      <h2>대화상대</h2>
      <div>
        <GeneralUserCard />
      </div>
    </Section>
  )
}

export default UserListSection
