import {useUser} from '@/store/useUser';

const accessToken = useUser.getState().accessToken;
const token = encodeURIComponent(accessToken);
export default new WebSocket(`wss://chat-app-server-r94h.onrender.com?token=${token}`, ['soap', 'wamp']);