import {FC, useEffect, useRef, useState} from 'react';
import styles from './Search.module.css';
import Input from '@/UI/input/Input';
import MenuIcon from '../../assets/menuIcon.svg';
import {useSearch} from '@/modules/sidebar/store/useSearch';
import Arrow from '../../assets/arrow.svg';
import wss from '@/api/wss';
import {useUser} from '@/store/useUser';

const Search: FC = () => {
    const [search, setSearch] = useState('');

    const {setIsFocused, isFocused} = useSearch();
    const {user} = useUser();

    const input = useRef<HTMLInputElement>(null);

    const handleMouseOut = (currentRef) => {
        if (document.activeElement === currentRef) {
            setIsFocused(true);
        }
    };

    const handleAction = () => {
        if (isFocused) {
            setIsFocused(false);
        }
    }

    useEffect(() => {
        if (wss.readyState === wss.OPEN) {
            wss.send(JSON.stringify({
                type: 'SEARCH',
                data: {
                    search,
                    userId: user.id
                }
            }));
        }
    }, [search]);

    return (
        <div className={styles.Search}>
            <button onClick={handleAction}>
                {isFocused ? <Arrow className={styles.Icon}/> : <MenuIcon className={styles.Icon}/>}
            </button>
            <Input
                value={search}
                onChange={setSearch}
                placeholder='Search...'
                className={styles.Input}
                ref={input}
                onMouseUp={() => handleMouseOut(input.current)}
            />
        </div>
    );
};

export default Search;