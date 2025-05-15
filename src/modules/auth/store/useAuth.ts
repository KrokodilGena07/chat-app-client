import {create} from 'zustand';
import {immer} from 'zustand/middleware/immer';
import {LoginInput} from '@/modules/auth/models/LoginInput';
import {AuthApi} from '@/modules/auth/api/authApi';
import {AxiosError} from 'axios';
import {ErrorResponse} from '@/modules/auth/models/ErrorResponse';
import {AuthResponse} from '@/models/AuthResponse';

interface AuthStore {
    data: AuthResponse | null;
    isLoading: boolean;
    error: ErrorResponse | null;
    login: (data: LoginInput) => Promise<void>;
}

export const useAuth = create<AuthStore>()(immer(set => ({
    data: null as null,
    isLoading: false,
    error: null as null,
    login: async data => {
        set({isLoading: true, error: undefined});
        try {
            const response = await AuthApi.login(data);
            set({isLoading: false, data: response.data});
        } catch (e) {
            if (e instanceof AxiosError) {
                const msg = e.response.data?.message;
                if (msg) {
                    set({isLoading: false, error: {message: msg}});
                }
            }
        }
    }
})));