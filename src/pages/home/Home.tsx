import React, {FC} from 'react';
import {Sidebar} from '@/modules/sidebar';
import {Chat} from '@/modules/chat';

const Home: FC = () => {
    return (
        <div>
            <Sidebar/>
            <Chat/>
        </div>
    );
};

export default Home;