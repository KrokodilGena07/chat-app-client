import {ChatData} from '@/modules/sidebar/models/ChatData';

export interface ChatModel {
    id: string;
    chat: ChatData | undefined;
}