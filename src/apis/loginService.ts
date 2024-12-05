import fetchApi from '@apis/ky'

// 로그인 API 응답 타입 정의
interface LoginResponseData {
  memberId: number
  grantType: string
  accessToken: string
  refreshToken: string
}

interface LoginResponse {
  status: string
  message: string | null
  data: LoginResponseData
  timestamp: string
  code: number
}

// 로그인 요청 함수
export const loginPost = async (email: string): Promise<LoginResponseData> => {
  try {
    // API 호출
    const response = await fetchApi
      .post('members/login', {
        json: { email },
      })
      .json<LoginResponse>()

    const { accessToken, refreshToken } = response.data

    if (!accessToken) {
      throw new Error('서버에서 accessToken이 반환되지 않았습니다.')
    }

    // 액세스 토큰 저장
    localStorage.setItem('token', accessToken)
    // localStorage.setItem('refreshToken', refreshToken);

    console.log('로그인 성공:', response.data)
    return response.data // `data` 객체를 반환
  } catch (error) {
    console.error('로그인 실패:', error)
    throw error // 에러를 상위 호출부로 전달
  }
}
