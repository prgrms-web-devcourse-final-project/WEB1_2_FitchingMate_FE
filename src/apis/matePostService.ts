import fetchApi from './ky'

const matePostService = {
  postMatePost: async (formData: FormData) => {
    const response = await fetchApi
      .post(`mates`, {
        body: formData,
      })
      .json()

    return response
  },
}

export default matePostService
