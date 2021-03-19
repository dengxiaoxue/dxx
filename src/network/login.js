import axios from 'axios'

export function reqLogin(config) {
    return axios.post('http://localhost:8000/login', config)
}