import {api} from '@/api';
import {AuthResponse} from '@/models/AuthResponse';
import {LoginInput} from '@/modules/auth/models/LoginInput';
import {RegistrationInput} from '@/modules/auth/models/RegistrationInput';

export class AuthApi {
    static async registration(data: RegistrationInput, image: File | null) {
        const formData = new FormData();

        for (const key in data) {
            formData.append(key, data[key as keyof RegistrationInput]);
        }
        if (image) {
            formData.append('image', image);
        }

        return await api.post<AuthResponse>('/auth/registration', formData);
    }

    static async login(data: LoginInput) {
        return await api.post<AuthResponse>('/auth/login', data);
    }
}