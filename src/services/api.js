import axios from 'axios'

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8'
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Accept'

const baseURLEnv = 'https://jxjq6t6jke.execute-api.us-east-1.amazonaws.com/Prod';

const api = axios.create({
    baseURL: baseURLEnv,
})

export default api
