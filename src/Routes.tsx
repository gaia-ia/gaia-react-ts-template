import Login from '@pages/Login';
import AppLayout from '@pages/_layout/AppLayout';
import ProtectedRoute from '@utils/ProtectedRoute';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

const AppRoutes = () => {
  const protectedRoutes = [
    {
      path: '/dashboard',
      element: <div>Dashboard</div>,
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />

        <Route path="/login/*" element={<Login />} />

        {protectedRoutes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <ProtectedRoute>
                <AppLayout>{route.element}</AppLayout>
              </ProtectedRoute>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
