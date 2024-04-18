import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://185.128.105.196:4444/'
})

instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token');
    return config;
});

export default instance;