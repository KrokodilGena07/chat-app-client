import {FC, useState} from 'react';
import styles from './SearchContent.module.css';
import {useSearch} from '@/modules/sidebar/store/useSearch';
import socket from '@/api/wss';
import {User} from '@/models/User';
import {useChat} from '@/store/useChat';

const SearchContent: FC = () => {
    const {isFocused} = useSearch();
    const {setRecipientId} = useChat();

    const [results, setResults] = useState<User[]>([]);

    socket.onmessage = (event) => {
        const ev = JSON.parse(event.data) as {type: string ; data: any};
        switch (ev.type) {
            case 'SEARCH':
                setResults(ev.data);
                break
        }
    }

    if (isFocused) {
        return (
            <div className={styles.SearchContent}>
                {results?.map(res =>
                    <div
                        key={res.id}
                        className={styles.SearchItem}
                        onClick={() => setRecipientId(res.id)}
                    >
                        {res.image ?
                            <img src={res.image} alt="img" className={styles.Image}/>
                            :
                            <div className={styles.Avatar}>
                                {`${res.name[0]}${res.surname[0]}`}
                            </div>
                        }
                        <div className={styles.Text}>{res.name} {res.surname}</div>
                    </div>
                )}
            </div>
        );
    }
};

export default SearchContent;