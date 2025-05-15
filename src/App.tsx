import React, {FC, Suspense, useEffect} from 'react';
import {useUser} from '@/store/useUser';
import {privateRoutes, publicRoutes} from '@/router';
import {Route, Routes} from 'react-router-dom';
import {refresh} from '@/utils/refresh';

const App: FC = () => {
    const {user} = useUser();
    const routes = user ? privateRoutes : publicRoutes;

    useEffect(() => {
        // TODO MAKE REFRESH
    });

    return (
        <Suspense fallback='Loading...'>
            <Routes>
                {routes.map(route =>
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                    />
                )}
            </Routes>
        </Suspense>
    );
};

export default App;