import axios from 'axios';

const token = JSON.parse(localStorage.getItem('Token') || 'null');

export const api = axios.create({
    baseURL: 'https://chat-app-server-r94h.onrender.com/api',
    withCredentials: true,
    headers: token ? {
        Authorization: `Bearer ${token}`
    } : {}
});