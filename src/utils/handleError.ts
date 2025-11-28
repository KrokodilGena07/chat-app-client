import {AxiosError} from 'axios';
import {ErrorResponse} from '@/modules/auth/models/ErrorResponse';

export const handleError = (e: unknown): ErrorResponse => {
    if (e instanceof AxiosError) {
        if (e?.response) {
            if (e.response.data?.message) {
                return e.response.data as ErrorResponse;
            }
        }
    }

    return {message: 'Looks like something went wrong'};
};