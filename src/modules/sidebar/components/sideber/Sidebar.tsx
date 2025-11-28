import {FC, useEffect} from 'react';
import styles from './Sidebar.module.css';
import Search from '@/modules/sidebar/components/search/Search';
import {useChats} from '@/modules/sidebar/store/useChats';
import {useUser} from '@/store/useUser';
import Chats from '@/modules/sidebar/components/chats/Chats';
import {useChat} from '@/store/useChat';
import SearchContent from '@/modules/sidebar/components/searchContent/SearchContent';

export const Sidebar: FC = () => {
    const {user} = useUser();
    const {isLoading, error, data, getMany} = useChats();

    useEffect(() => {
        getMany(user.id);
    }, []);

    return (
        <aside className={styles.Sidebar}>
            <Search/>
            <Chats
                isLoading={isLoading}
                error={error}
                data={data}
            />
            <SearchContent
            />
        </aside>
    );
};