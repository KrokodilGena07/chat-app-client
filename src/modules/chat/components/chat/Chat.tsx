import {FC, useEffect, useState} from 'react';
import styles from './Chat.module.css';
import {useUser} from '@/store/useUser';
import {useChat} from '@/store/useChat';
import {MessageModel} from '@/modules/chat/models/MessageModel';
import Message from '@/modules/chat/components/message/Message';
import socket from '@/api/wss';

export const Chat: FC = () => {
    const {id, recipientId, setChat} = useChat();

    const [text, setText] = useState('');
    const [messages, setMessages] = useState<MessageModel[]>([]);

    const {user, setUser, accessToken} = useUser();

    socket.onopen = () => {
        console.log('OPEN')
    }

    socket.onmessage = (event) => {
        const ev = JSON.parse(event.data) as {type: string ; data: any};
        switch (ev.type) {
            case 'LOAD_MESSAGES':
                setMessages(ev.data);
                break
            case 'SEND_MESSAGE':
                setMessages(prev => [...prev, ev.data]);
                break
            case 'CREATE_CHAT':
                setChat(ev.data.chatId)
                setMessages(prev => [...prev, ev.data]);
                break
        }
    }

    socket.onclose= (err) => {
        console.log(err)
    }

    socket.onerror = (error) => {
        console.log(error)
    }

    console.log(id)

    const sendMessage = () => {
        if (id) {
            socket.send(JSON.stringify({
                type: 'SEND_MESSAGE', // TODO MAKE TYPE
                data: {
                    senderId: user.id,
                    text: text,
                    chatId: id
                }
            }));
        } else if(recipientId) {
            socket.send(JSON.stringify({
                type: 'SEND_MESSAGE', // TODO MAKE TYPE
                data: {
                    recipientId,
                    text: text,
                    senderId: user.id
                }
            }));
        }
    };

    if (!id && !recipientId) {
        return null;
    }

    return (
        <div className={styles.Chat}>
            <div className={styles.Messages}>
                {messages?.length > 0 ?
                    messages.map(msg =>
                        <Message
                            message={msg}
                            key={msg.id}
                            id={user.id}
                        />
                    )
                    :
                    <div className={styles.FirstMsg}>
                        <div>
                            <div>No messages</div>
                            <button>Start texting</button>
                        </div>
                    </div>
                }
            </div>
            <div className={styles.Form}>
                <div>
                    <input
                        type='text'
                        value={text}
                        onChange={e => setText(e.target.value)}
                        className={styles.Input}
                    />
                </div>
                <div>
                    <button
                        className={styles.Button}
                        onClick={sendMessage}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};