import axios from "axios"
import getEnv from "../utility/getEnv"


const api = axios.create({
    baseURL: getEnv('VITE_SERVER_URL'),
})
//intercept request bfore going to server
api.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token') || ''
        if (token) config.headers.Authorization = `Bearer ${token}`
        return config
    },
    Promise.reject 
)

export default api