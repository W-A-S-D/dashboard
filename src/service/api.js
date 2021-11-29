import axios from 'axios';

const api = axios.create({
    baseURL: 'https://wasdapi.herokuapp.com',
})


export default api;