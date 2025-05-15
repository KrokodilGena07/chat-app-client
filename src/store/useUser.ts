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
    accessToken: null as null,
    user: JSON.parse(localStorage.getItem('User') || 'null'),
    setUser: response => {
        set({
            user: response.user,
            accessToken: response.accessToken
        });
        localStorage.setItem('User', JSON.stringify(response.user));
    },
    removeUser: () => {
        set({
            user: null,
            accessToken: null
        });
        localStorage.removeItem('User');
    }
})))