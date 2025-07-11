import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from '@/App';
import './styles/index.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLDivElement
);
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);