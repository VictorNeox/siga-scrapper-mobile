import axios from 'axios';

const api = axios.create({
    baseURL: 'http://siga-fatec-api.herokuapp.com'
});

export default api;