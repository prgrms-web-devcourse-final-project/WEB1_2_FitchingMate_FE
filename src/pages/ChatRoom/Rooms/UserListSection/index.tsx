import { Section } from '@pages/ChatRoom/style'

import GoodsUserCard from '../GoodsChatRoom/GoodsUserCard'
import MateUserCard from '../MateChatRoom/MateUserCard'
import GeneralUserCard from '../GeneralChatRoom/GeneralUserCard'

import { ChatType } from '@pages/ChatPage'

interface UserListSectionProps {
  currentChatType: ChatType
  handleAlertClick: () => void
}

const UserListSection = ({
  currentChatType,
  handleAlertClick,
}: UserListSectionProps) => {
  return (
    <Section>
      <h2>대화상대</h2>
      <div>
        {currentChatType === '굿즈' && <GoodsUserCard />}
        {currentChatType === '메이트' && (
          <MateUserCard handleAlertClick={handleAlertClick} />
        )}
        {currentChatType === '일반' && <GeneralUserCard />}
      </div>
    </Section>
  )
}

export default UserListSection
