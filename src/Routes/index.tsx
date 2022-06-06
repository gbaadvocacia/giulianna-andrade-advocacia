import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Main from '../page/Main';

export const PagesRoutes: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main />} />
        </Routes>
    </BrowserRouter>
);
