import {FC, Suspense} from 'react';
import {useUser} from '@/store/useUser';
import {privateRoutes, publicRoutes} from '@/pages';
import {Route, Routes} from 'react-router-dom';

const App: FC = () => {
    const {user, accessToken} = useUser();
    const routes = user ? privateRoutes : publicRoutes;

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
    ); // TODO ADD LOADING
};

export default App;