import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { client } from './axiosClient'

const request = async (options: AxiosRequestConfig) => {
  const onSuccess = (response: AxiosResponse) => {
    const { data } = response
    return data
  }

  const onError = function (error: AxiosError) {
    return Promise.reject({
      message: error.message,
      code: error.code,
      response: error.response,
    })
  }

  return client(options).then(onSuccess).catch(onError)
}

export default request
