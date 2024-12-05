import { useEffect } from 'react'
import fetchApi from '@apis/ky'
import { NaverLoginResponse } from '@typings/db'
import { useNavigate } from 'react-router-dom'
import { ROUTE_PATH } from '@constants/ROUTE_PATH'
import { loginPost } from '@apis/loginService'

const NaverCallback = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        // URL에서 쿼리 파라미터 추출
        const urlParams = new URLSearchParams(window.location.search)
        const code = urlParams.get('code')
        const state = urlParams.get('state')

        if (code && state) {
          // 네이버 로그인 데이터 확인용 요청
          const response = await fetchApi
            .get(`auth/login/naver`, {
              searchParams: { code, state },
            })
            .json<NaverLoginResponse>()

          console.log('네이버 로그인 응답:', response)

          if (response.isNewMember) {
            navigate(ROUTE_PATH.SIGNUP, {
              state: { profile: response.naverProfileResponse },
            })
          } else {
            try {
              // 로그인 API 호출
              const loginResponse = await loginPost(
                response.naverProfileResponse.email
              )

              // 메인 페이지로 이동
              navigate(ROUTE_PATH.HOME)
            } catch (error) {
              console.error('로그인 처리 중 오류가 발생했습니다:', error)
            }
          }
        } else {
          console.error('code 또는 state가 누락되었습니다.')
        }
      } catch (error) {
        console.error('네이버 로그인 처리 중 오류가 발생했습니다.', error)
      }
    }

    fetchData()
  }, [])

  return
}

export default NaverCallback
