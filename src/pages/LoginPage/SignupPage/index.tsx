import { useLocation, useNavigate } from 'react-router-dom'
import Form from '@components/Form'
import {
  SignupPageContainer,
  StyledForm,
  StyledLabel,
  GlobalButtonWrapper,
  FieldWrapper,
} from './style'
import TeamSelectModal from '@components/TeamSelectModal'
import GlobalButton from '@components/GlobalButton'
import fetchApi from '@apis/ky'
import { ROUTE_PATH } from '@constants/ROUTE_PATH'
import { useState } from 'react'

const SignupPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const profile = location.state?.profile
  const [selectedTeamId, setSelectedTeamId] = useState<number | undefined>(
    undefined,
  )
  const [nickname, setNickname] = useState('')

  if (!profile) {
    console.error('프로필 정보가 누락되었습니다.')
    return <div>프로필 정보를 로드하는 데 문제가 발생했습니다.</div>
  }
  const isButtonEnabled = nickname.trim() !== '' && selectedTeamId !== undefined
  const handleSignup = async () => {
    if (!isButtonEnabled) return

    try {
      // 회원가입 API 호출
      const response = await fetchApi.post('members/join', {
        json: {
          name: profile.name,
          email: profile.email,
          gender: profile.gender,
          birthyear: profile.birthyear,
          nickname: nickname,
          teamId: selectedTeamId,
        },
      })

      // 가입 완료 후 메인 페이지로 이동
      navigate(ROUTE_PATH.HOME)

      // UX를 위해 두 가지 방법 고민
      // 1.toastify를 이요
    } catch (error) {
      
      console.error('회원가입 처리 중 오류가 발생했습니다.', error)
    }
  }

  return (
    <SignupPageContainer>
      <FieldWrapper>
        <StyledLabel>연령대 / 성별</StyledLabel>
        <p>
          {profile.birthyear} / {profile.gender === 'M' ? '남' : '여'}
        </p>
      </FieldWrapper>

      <StyledForm>
        <Form
          fieldList={[
            { name: '닉네임', placeholder: '닉네임을 입력해주세요.' },
          ]}
          onChange={(fieldName, value) => {
            if (fieldName === '닉네임') {
              setNickname(value)
              console.log('닉네임: ', value)
            }
          }}
        />
        <FieldWrapper>
          <StyledLabel>마이팀</StyledLabel>
          <TeamSelectModal
            onTeamSelect={(team) => {
              setSelectedTeamId(team.teamId)
              console.log('선택한 팀 id: ', team.teamId)
            }}
          />
        </FieldWrapper>
      </StyledForm>

      <GlobalButtonWrapper>
        <GlobalButton
          text='회원가입'
          $isNavy={isButtonEnabled}
          $disabled={!isButtonEnabled} 
          onClick={handleSignup}
        />
      </GlobalButtonWrapper>
    </SignupPageContainer>
  )
}

export default SignupPage
