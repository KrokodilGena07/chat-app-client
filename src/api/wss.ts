import {useUser} from '@/store/useUser';

const accessToken = useUser.getState().accessToken;
const token = encodeURIComponent(accessToken);
export default new WebSocket(`ws://localhost:8000?token=${token}`, ['soap', 'wamp']);