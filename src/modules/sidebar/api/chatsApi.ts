import {AxiosResponse} from 'axios';
import {ChatModel} from '@/modules/sidebar/models/ChatModel';
import {api} from '@/api';

export class ChatsApi {
    static async getMany(userId: string): Promise<AxiosResponse<ChatModel[]>> {
        return await api.get(`/chats/${userId}`);
    }
}