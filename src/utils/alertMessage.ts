const ALERT_MESSAGE = {
  CHAT_EXIT: {
    title: '채팅방 나가기',
    notice:
      '채팅방을 나가면 채팅 목록 및 채팅 기록이 삭제되고 복구 할 수 없습니다\n채팅방을 나가시겠습니까?',
  },

  MATE_COMPLETE: {
    title: '모집완료',
    notice: '모집을 완료하시겠습니까?',
  },

  MATE_STATUS_CHANGE: {
    title: '모집상태 변경',
    notice: '모집중 상태로 변경하시겠습니까?',
  },

  GAME_COMPLETE: {
    title: '직관완료',
    notice: '직관을 완료하셨습니까?',
  },

  LOGOUT: {
    title: '로그아웃',
    notice: '로그아웃 하시겠습니까?',
  },

  DEAL_COMPLETE: (userName: string) => {
    return {
      title: '거래완료',
      notice: `${userName}님과 거래를 마치셨습니까?`,
    }
  },
}

export default ALERT_MESSAGE
