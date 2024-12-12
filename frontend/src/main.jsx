import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import Login from './pages/Login';
import Register from './pages/SingUp';
import Dasboard from './pages/Dasboard';
import ProtectedRouter from './components/ProtectedRouter';
import {AuthProvider} from './Auth/AuthProvider';

const router = createBrowserRouter([
  {
    path: '/Home',
    element: <App />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/',
    element: <ProtectedRouter />,
    children: [
      {
        path: '/dasboard',
        element: <Dasboard />,
      }
    ]
  },
  {
    path: '*', // Ruta fallback
    element: <h1>404 Not Found</h1>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
