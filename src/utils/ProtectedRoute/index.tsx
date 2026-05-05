import { UserDataContext } from '@providers/UserDataProvider';
import type { TRole } from '@types';
import { env } from '@utils/env';
import { useContext, useEffect } from 'react';
import { Navigate } from 'react-router';

type ProtectedRouteProps = {
  children: React.ReactElement;
  roleOnly?: TRole[];
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  roleOnly,
}) => {
  const { loggedIn, loading, user } = useContext(UserDataContext);

  useEffect(() => {
    if (!loading && loggedIn === false) {
      window.location.href = `${env.VITE_GAIA_APP_URL}/logout`;
    }
  }, [loading, loggedIn]);

  if (loading || loggedIn === null || !user) return null;

  const role = user.role;

  if (roleOnly && !roleOnly.includes(role)) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
