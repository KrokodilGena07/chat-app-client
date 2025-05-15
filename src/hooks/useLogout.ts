import {AuthApi} from '@/api/authApi';
import {useUser} from '@/store/useUser';

export async function useLogout() {
    const {removeUser} = useUser();

    try {
        await AuthApi.logout();
        removeUser();
    } catch (e) {
        alert('Logout error'); // TODO MAKE A MODAL
    }
}