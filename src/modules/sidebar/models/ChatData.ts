import {ChatUser} from '@/modules/sidebar/models/ChatUser';

export interface ChatData {
    id: string;
    name: string;
    type: 'CHAT' | 'GROUP';
    chat_users: ChatUser[];
    messages: {text: string ; date: string}[];
}