import fetchApi from './ky'

const mateService = {
  postMatePost: async (formData: FormData) => {
    const response = await fetchApi
      .post(`mates`, {
        body: formData,
      })
      .json()

    return response
  },
}

export default mateService
