import {FC} from 'react';
import styles from './ChatItem.module.css';
import {ChatModel} from '@/modules/sidebar/models/ChatModel';
import {useChat} from '@/store/useChat';
import socket from '@/api/wss';
import {useUser} from '@/store/useUser';

interface ChatProps {
    data: ChatModel;
}

const ChatItem: FC<ChatProps> = ({data}) => {
    const {setChat} = useChat();
    const {user} = useUser();

    const select = () => {
        socket.send(JSON.stringify({
            type: 'LOAD_MESSAGES',
            data: {
                chatId: data.chat.id,
                userId: user.id
            }
        }));
        setChat(data.chat.id);
    }

    const img = data.chat.chat_users[0].user.image;
    const name = data.chat.chat_users[0].user.name;
    const surname = data.chat.chat_users[0].user?.surname;

    return (
        <div
            className={styles.Chat}
            onClick={select}
        >
            <div className={styles.Info}>
                {img ?
                    <img src={data.chat.chat_users[0].user.image} alt="img" className={styles.Image}/>
                    :
                    <div className={styles.Avatar}>
                        {`${name[0]}${surname[0]}`}
                    </div>
                }
                <div className={styles.Body}>
                    <h4>{data.chat.type === 'CHAT' ? `${name} ${surname}` : data.chat.name}</h4>
                    <div>{data.chat.messages[0].text}</div>
                </div>
            </div>
            <div>
                {new Date(data.chat.messages[0].date).toLocaleDateString()}
            </div>
        </div>
    );
};

export default ChatItem;