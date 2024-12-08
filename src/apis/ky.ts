import ky from 'ky'

// 서버 주소 변경 필요
const END_POINT = import.meta.env.VITE_API_ENDPOINT

const prepareRequestsWithAuth = (request: Request) => {
  const authToken =
    window.localStorage.getItem('token') || import.meta.env.VITE_TOKEN

  request.headers.set('Authorization', `Bearer ${authToken}`)
}

interface CustomError extends Error {
  response: {
    json: () => Promise<Error>
  }
}

const errorHandler = async (error: CustomError) => {
  const errorBody = await error.response.json()
  const errorMessage = {
    ...errorBody,
    message: errorBody.message || '알 수 없는 오류가 발생했습니다',
  }

  throw errorMessage
}

const fetchApi = ky.extend({
  prefixUrl: END_POINT,
  hooks: {
    beforeRequest: [prepareRequestsWithAuth],
    beforeError: [errorHandler],
  },
})

export default fetchApi
