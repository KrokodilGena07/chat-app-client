import {User} from '@/models/User';

export interface AuthResponse {
    user: User;
    accessToken: string;
}