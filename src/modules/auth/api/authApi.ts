import {api} from '@/api';
import {AuthResponse} from '@/models/AuthResponse';
import {LoginInput} from '@/modules/auth/models/LoginInput';
import {RegistrationInput} from '@/modules/auth/models/RegistrationInput';

export class AuthApi {
    static async registration(data: RegistrationInput) {
        return await api.post<AuthResponse>('/auth/registration', data);
    }

    static async login(data: LoginInput) {
        return await api.post<AuthResponse>('/auth/login', data);
    }
}