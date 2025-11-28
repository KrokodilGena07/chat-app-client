import {RouteObject} from 'react-router-dom';
import LazyAuth from '@/pages/auth/LazyAuth';
import LazyChat from '@/pages/home/LazyHome';

export enum Pages {
    CHAT = '/',
    AUTH_REGISTRATION = '/registration',
    AUTH_LOGIN = '/login',
    AUTH_PASSWORD = '/password'
}

export const privateRoutes: RouteObject[] = [
    {path: Pages.CHAT, element: <LazyChat/>},
    {path: '*', element: <LazyChat/>}
];

export const publicRoutes: RouteObject[] = [
    {path: '*', element: <LazyAuth/>}
];