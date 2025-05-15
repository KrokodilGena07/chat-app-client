import {LoginInput} from '@/modules/auth/models/LoginInput';

export interface RegistrationInput extends LoginInput {
    name: string;
    surname?: string;
}