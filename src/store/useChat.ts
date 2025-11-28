import {create} from 'zustand';
import {immer} from 'zustand/middleware/immer';

interface ChatStore {
    id: string | undefined;
    recipientId: string | undefined;
    setChat: (id: string) => void;
    setRecipientId: (id: string) => void;
}

export const useChat = create<ChatStore>()(immer(set => ({
    id: undefined,
    recipientId: undefined,
    setChat: id => {
        set({id});
    },
    setRecipientId: recipientId => {
        set({recipientId});
    },
})));