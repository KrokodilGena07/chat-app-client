import axios from 'axios';
import {useUser} from '@/store/useUser';

const token = useUser.getState().accessToken;

export const api = axios.create({
    baseURL: 'http://localhost:5000/api',
    withCredentials: true,
    headers: token ? {
        authorization: `Bearer ${token}`
    } : {}
});