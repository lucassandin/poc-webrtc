import axios from 'axios'

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8'
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Accept'

const baseURL = process.env.REACT_APP_API_ENDPOINT;

const api = axios.create({
    baseURL: baseURL,
})

export default api
