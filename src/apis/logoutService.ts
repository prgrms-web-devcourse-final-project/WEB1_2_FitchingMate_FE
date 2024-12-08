import fetchApi from '@apis/ky'

export const logoutPost = async () => {
  await fetchApi.post('members/logout')
}
