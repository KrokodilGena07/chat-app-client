import axios from 'axios';

const token = JSON.parse(localStorage.getItem('Token') || 'null');

export const api = axios.create({
    baseURL: 'http://localhost:5000/api',
    withCredentials: true,
    headers: token ? {
        Authorization: `Bearer ${token}`
    } : {}
});