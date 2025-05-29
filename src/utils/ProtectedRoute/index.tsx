import { UserDataContext } from '@providers/UserDataProvider';
import { env } from '@utils/env';
import { useContext, useEffect } from 'react';

type ProtectedRouteProps = {
  children: React.ReactElement;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { loggedIn, loading } = useContext(UserDataContext);

  useEffect(() => {
    if (!loading && loggedIn === false) {
      window.location.href = `${env.VITE_GAIA_APP_URL}/logout`;
    }
  }, [loading, loggedIn]);

  if (loading || loggedIn === null) {
    return <div></div>;
  }

  return children;
};

export default ProtectedRoute;
