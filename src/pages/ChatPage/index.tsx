import { ChatListContainer, ChatPageContainer, TabContainer } from './style'
import { GlobalFloatAside } from '@styles/globalStyle'

import ALERT_MESSAGE from '@constants/alertMessage'

import PillButton from '@components/PillButton'
import Alert from '@components/Alert'
import SubHeader from '@layouts/SubHeader'
import GlobalNav from '@layouts/GlobalNav'

import { useModal } from '@hooks/useModal'
import useNavigateChat from '@hooks/useNavigateChat'
import GoodsCardList from './ChatPageList/GoodsCardList'
import { useGoodsChatStore } from '@store/useGoodsChatStore'
import { useGoodsChatExit, useMateChatExit } from '@hooks/useChatExit'
import MateCardList from './ChatPageList/MateCardList'
import { useMateChatStore } from '@store/useMateChatStore'

export const CHAT_TAB_LIST = ['메이트', '굿즈'] as const
export type ChatType = (typeof CHAT_TAB_LIST)[number]

const ChatPage = () => {
  const { currentTab, handleTabClick } = useNavigateChat()
  const { alertRef, handleAlertClick } = useModal()
  const { currentChatRoomId } = useGoodsChatStore()
  const { mateChatRoomId } = useMateChatStore()

  // 굿즈 채팅방 나가기
  const { goodsExitMutate } = useGoodsChatExit(currentChatRoomId as string)
  const { mateExitMutate } = useMateChatExit(mateChatRoomId as string)

  if (!currentTab) return null

  const handleExitClick = () => {
    if (currentTab === '굿즈') {
      goodsExitMutate()
    }
    if (currentTab === '메이트') {
      mateExitMutate()
    }
  }

  return (
    <>
      <SubHeader center='메시지' />
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
          {currentTab === '굿즈' && (
            <GoodsCardList onExitClick={handleAlertClick} />
          )}
          {currentTab === '메이트' && (
            <MateCardList onExitClick={handleAlertClick} />
          )}
        </ChatListContainer>

        <Alert
          ref={alertRef}
          title={ALERT_MESSAGE.CHAT_EXIT.title}
          notice={ALERT_MESSAGE.CHAT_EXIT.notice}
          actionText='나가기'
          cancelText='취소'
          handleAlertClick={handleExitClick}
        />
      </ChatPageContainer>
      <GlobalFloatAside>
        <GlobalNav />
      </GlobalFloatAside>
    </>
  )
}

export default ChatPage
