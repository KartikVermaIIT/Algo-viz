import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://127.0.0.1:8000/',
    baseURL: 'https://algo-visualiser-7uku.onrender.com'
});

export default api;