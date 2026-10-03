import axios from 'axios'
import { getNextQuiz, postAnswer, postQuiz } from '../backend/helpers'

// Demo mode (static hosting, no Express server): answer the app's /api requests
// in the browser with the same quiz data and validation as backend/server.js.
const routes = {
  'get /api/quiz/next': () => getNextQuiz(),
  'post /api/quiz/answer': body => postAnswer(body),
  'post /api/quiz/new': body => postQuiz(body),
}

export function installDemoApi() {
  axios.defaults.adapter = async config => {
    const path = config.url.replace(/^https?:\/\/[^/]+/, '')
    const handler = routes[`${config.method} ${path}`]
    const [status, data] = handler
      ? await handler(config.data ? JSON.parse(config.data) : undefined)
      : [404, { message: `Endpoint [${config.method.toUpperCase()}] ${path} does not exist` }]
    const response = { data, status, statusText: String(status), headers: {}, config, request: {} }
    if (status >= 400) {
      throw new axios.AxiosError(`Request failed with status code ${status}`, 'ERR_BAD_REQUEST', config, {}, response)
    }
    return response
  }
}
