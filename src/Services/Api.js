import axios from 'axios';

const api = axios.create({
    baseURL: "http://domain.com/api"
});

export default api;