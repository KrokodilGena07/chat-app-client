import {AuthApi} from '@/api/authApi';

export async function refresh() {
    try {
        return await AuthApi.refresh();
    } catch (e) {
        console.log(e);
    }
}