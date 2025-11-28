import {api} from '@/api/index';
import {AuthResponse} from '@/models/AuthResponse';

export class AuthApi {
    static async logout() {
        return await api.post('/auth/logout');
    }

    static async refresh() {
        return await api.get<AuthResponse>('/auth/refresh');
    }
}