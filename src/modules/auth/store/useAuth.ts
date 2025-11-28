import {create} from 'zustand';
import {immer} from 'zustand/middleware/immer';
import {LoginInput} from '@/modules/auth/models/LoginInput';
import {AuthApi} from '@/modules/auth/api/authApi';
import {ErrorResponse} from '@/modules/auth/models/ErrorResponse';
import {AuthResponse} from '@/models/AuthResponse';
import {handleError} from '@/utils/handleError';
import {RegistrationInput} from '@/modules/auth/models/RegistrationInput';

interface AuthStore {
    data: AuthResponse | null;
    isLoading: boolean;
    error: ErrorResponse | null;
    login: (data: LoginInput) => Promise<void>;
    registration: (data: RegistrationInput) => Promise<void>;
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
            set({isLoading: false, error: handleError(e)});
        }
    },
    registration: async data => {
        set({isLoading: true, error: undefined});
        try {
            const response = await AuthApi.registration(data);
            set({isLoading: false, data: response.data});
        } catch (e) {
            set({isLoading: false, error: handleError(e)});
        }
    }
})));