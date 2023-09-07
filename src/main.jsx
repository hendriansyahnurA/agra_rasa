import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AdminPage from './Pages/admin.jsx';
import SalesPage from './Pages/sales.jsx';

const router = createBrowserRouter([
  {
    path: '/admin',
    element: <AdminPage />,
  },
  {
    path: '/sales',
    element: <SalesPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
