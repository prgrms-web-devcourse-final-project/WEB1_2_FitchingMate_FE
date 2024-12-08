export type AlertMessageObject = {
  string: {
    title: string
    notice: string
    actionText: string
    cancelText: string
  }
}

const ALERT_MESSAGE = {
  CHAT_EXIT: {
    title: '채팅방 나가기',
    notice:
      '채팅방을 나가면 채팅 목록 및 채팅 기록이 삭제되고 복구 할 수 없습니다\n채팅방을 나가시겠습니까?',
    actionText: '나가기',
    cancelText: '취소',
  },

  MATE_COMPLETE: {
    title: '모집완료',
    notice: '모집을 완료하시겠습니까?',
    actionText: '모집완료',
    cancelText: '취소',
  },

  MATE_STATUS_CHANGE: {
    title: '모집상태 변경',
    notice: '모집중 상태로 변경하시겠습니까?',
    actionText: '변경완료',
    cancelText: '취소',
  },

  GAME_COMPLETE: {
    title: '직관완료',
    notice: '직관을 완료하셨습니까?',
    actionText: '직관완료',
    cancelText: '취소',
  },

  LOGOUT: {
    title: '로그아웃',
    notice: '로그아웃 하시겠습니까?',
    actionText: '로그아웃',
    cancelText: '취소',
  },

  DEAL_COMPLETE: (userName: string) => ({
    title: '거래완료',
    notice: `${userName}님과 거래를 마치셨습니까?`,
    actionText: '거래완료',
    cancelText: '취소',
  }),

  EXCLUDE_USER: (userName: string) => ({
    title: '유저 제외',
    notice: `${userName}님을 제외하시겠습니까?`,
    actionText: '제외하기',
    cancelText: '취소',
  }),

  DELETE_POST: {
    title: '게시글 삭제',
    notice: '게시글을 삭제하시겠습니까?',
    actionText: '삭제하기',
    cancelText: '취소',
  },
}

export type AlertMessage = keyof typeof ALERT_MESSAGE

export default ALERT_MESSAGE
