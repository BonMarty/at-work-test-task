import { createBrowserRouter } from 'react-router-dom';
import { EditPage, HomePage } from '../../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/edit/:userId',
    element: <EditPage />,
  },
]);
