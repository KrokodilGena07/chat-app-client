import {create} from 'zustand';
import {immer} from 'zustand/middleware/immer';
import {User} from '@/models/User';
import {AuthResponse} from '@/models/AuthResponse';

interface UserStore {
    accessToken: string | null;
    user: User | null;
    setUser: (response: AuthResponse) => void;
    removeUser: () => void;
}

export const useUser = create<UserStore>()(immer(set => ({
    accessToken: localStorage.getItem('TOKEN'),
    user: JSON.parse(localStorage.getItem('USER') || 'null'),
    setUser: response => {
        set({
            user: response.user,
            accessToken: response.accessToken
        });
        localStorage.setItem('USER', JSON.stringify(response.user));
        localStorage.setItem('TOKEN', response.accessToken);
    },
    removeUser: () => {
        set({
            user: null,
            accessToken: null
        });
        localStorage.removeItem('USER');
        localStorage.removeItem('TOKEN');
    }
})))