import { ChatListContainer, ChatPageContainer, TabContainer } from './style'

import { useRef, useState } from 'react'
import ChatCard from './ChatCard'
import PillButton from '@components/PillButton'
import Alert from '@components/Alert'

import ALERT_MESSAGE from '@constants/alertMessage'

export const CHAT_TAB_LIST = ['메이트', '굿즈', '일반'] as const
export type ChatType = (typeof CHAT_TAB_LIST)[number]

const ChatPage = () => {
  const [currentTab, setCurrentTab] = useState<ChatType>('메이트')

  const alertRef = useRef<HTMLDialogElement>(null)

  const openAlert = () => {
    alertRef.current?.showModal()
  }

  const handleTabClick = (tab: ChatType) => {
    setCurrentTab(tab)
  }

  return (
    <ChatPageContainer>
      <TabContainer>
        {CHAT_TAB_LIST.map((tab) => (
          <PillButton
            key={tab}
            text={tab}
            $isSelected={currentTab === tab}
            onClick={() => handleTabClick(tab)}
          />
        ))}
      </TabContainer>

      <ChatListContainer>
        <ChatCard
          currentTab={currentTab}
          onExitClick={openAlert}
        />
      </ChatListContainer>

      <Alert
        ref={alertRef}
        title={ALERT_MESSAGE.CHAT_EXIT.title}
        notice={ALERT_MESSAGE.CHAT_EXIT.notice}
        actionText='나가기'
        cancelText='취소'
      />
    </ChatPageContainer>
  )
}

export default ChatPage
