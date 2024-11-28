// 서버 연결 전 목업 서버 요청 테스트

import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

const RedirectHandler = () => {
  const [searchParams] = useSearchParams()

  useEffect(() => {
    // URL에서 code와 state 값 추출
    const code = searchParams.get('code')
    const state = searchParams.get('state')

    if (code && state) {
      console.log('✅ 네이버 로그인 성공')
      console.log('Code:', code)
      console.log('State:', state)

      // Mock 서버 요청 (실제 서버 요청은 백엔드 연동 후 추가)
      mockSendCodeToBackend(code, state)
    } else {
      console.error('❌ code 또는 state 값이 없습니다.')
    }
  }, [searchParams])

  return <div>로그인 처리 중...</div>
}

// Mock 서버 요청
const mockSendCodeToBackend = (code: string, state: string) => {
  console.log('📤 서버로 전달할 데이터:', { code, state })

  const mockResponse = {
    success: true,
    message: 'Mock response - 백엔드 없이 테스트 완료',
  }
  console.log('📥 서버 응답:', mockResponse)
}

export default RedirectHandler
