import {FC} from 'react';
import styles from './Chats.module.css';
import {ChatModel} from '@/modules/sidebar/models/ChatModel';
import {ErrorResponse} from '@/modules/auth/models/ErrorResponse';
import ChatItem from '@/modules/sidebar/components/chatItem/ChatItem';
import {useSearch} from '@/modules/sidebar/store/useSearch';

interface ChatsProps {
    data: ChatModel[] | undefined;
    error: ErrorResponse | undefined;
    isLoading: boolean;
}

const Chats: FC<ChatsProps> = props => {
    const {isFocused} = useSearch();

    console.log(isFocused);

    if (props.isLoading) {
        return 'Loading...'; // TODO ADD LOADER
    }

    if (props.error) {
        return <div>{props.error.message}</div>
    }

    if (props.data?.length === 0 && !isFocused) {
        return (
            <div className={styles.NoDataText}>
                You have no chats
                <button className={styles.Button}>
                    Start chatting
                </button>
            </div>
        );
    }

    if (props.data?.length > 0 && !isFocused) {
        return (
            <main className={styles.Chats}>
                {props.data.map(chat =>
                    <ChatItem key={chat.id} data={chat}/>
                )}
            </main>
        );
    }
};

export default Chats;