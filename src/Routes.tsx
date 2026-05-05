import AppLayout from '@pages/_layout/AppLayout';
import Homepage from '@pages/Homepage';
import ProtectedRoute from '@utils/ProtectedRoute';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

const AppRoutes = () => {
  const protectedRoutes = [
    {
      path: '/homepage',
      element: <Homepage />,
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/homepage" />} />

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
