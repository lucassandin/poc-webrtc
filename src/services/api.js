import axios from 'axios'

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Accept'

const baseURLEnv = process.env.REACT_APP_ENDPOINT;

const api = axios.create({
    baseURL: baseURLEnv
})

export default api
