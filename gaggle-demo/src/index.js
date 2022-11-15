import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import Error from './routes/error';
import IncidentsPage from './pages/IncidentsPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
  },
  {
    path: 'incidents/',
    element: <IncidentsPage />,
  },
  {
    path: 'forgot-password/',
    element: <ForgotPasswordPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
