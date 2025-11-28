import {FC} from 'react';
import {MessageModel} from '@/modules/chat/models/MessageModel';
import styles from './Message.module.css';

interface MessageProps {
    message: MessageModel;
    id: string;
}

const Message: FC<MessageProps> = ({message, id}) => {
    return (
        <div className={`${styles.Message} ${id !== message.senderId ? styles.ML : ''}`}>
            {message.text}
        </div>
    );
};

export default Message;