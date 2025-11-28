import {create} from 'zustand';
import {immer} from 'zustand/middleware/immer';
import {ChatModel} from '@/modules/sidebar/models/ChatModel';
import {ErrorResponse} from '@/modules/auth/models/ErrorResponse';
import {handleError} from '@/utils/handleError';
import {ChatsApi} from '@/modules/sidebar/api/chatsApi';

interface ChatStore {
    data: ChatModel[] | undefined;
    isLoading: boolean;
    error: ErrorResponse | undefined;
    getMany: (userId: string) => Promise<void>;
}

export const useChats = create<ChatStore>()(immer(set => ({
    data: undefined,
    isLoading: false,
    error: undefined,
    getMany: async userId => {
        set({isLoading: true});
        try {
            const response = await ChatsApi.getMany(userId);
            set({isLoading: false, data: response.data});
        } catch (e) {
            set({isLoading: false, error: handleError(e)});
        }
    }
})));