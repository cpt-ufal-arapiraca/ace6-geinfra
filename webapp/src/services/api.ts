import axios from 'axios';

const baseUrl = 'http://0.0.0.0:8080'; //TODO: verify this url

const api = axios.create({
    baseURL: baseUrl,
});

export default api;