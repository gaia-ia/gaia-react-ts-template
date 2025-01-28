import Homepage from '@pages/Homepage';
import Login from '@pages/Login';
import ProtectedRoute from '@utils/ProtectedRoute';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const AppRoutes = () => {
  const protectedRoutes = [
    {
      path: '/',
      element: <Homepage />,
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        {protectedRoutes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            element={<ProtectedRoute>{route.element}</ProtectedRoute>}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
