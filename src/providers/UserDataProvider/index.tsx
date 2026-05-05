import { useGetUserInfo } from '@api/users';
import type { TUserInfo } from '@types';
import { env } from '@utils/env';
import { createContext, useEffect, useState } from 'react';

type TUserDataContext = {
  loggedIn: boolean | null;
  logout: () => void;
  user: TUserInfo | null;
  loading: boolean;
};

export const UserDataContext = createContext<TUserDataContext>({
  loggedIn: null,
  logout: () => {},
  user: null,
  loading: false,
});

const DEV_BYPASS_USER: TUserInfo = {
  id: 'dev-bypass-user',
  email: 'dev@bypass.local',
  role: 'admin',
  organization_id: 'dev-bypass-org',
  services: [],
};

const bypassAuth = import.meta.env.VITE_DEV_BYPASS_AUTH === 'true';

const UserDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {

  const [token, setToken] = useState<string | null>(null);
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null);
  const [tokenLoaded, setTokenLoaded] = useState(false);
  const [user, setUser] = useState<TUserInfo | null>(null);

  useEffect(() => {
    if (bypassAuth) {
      setLoggedIn(true);
      setUser(DEV_BYPASS_USER);
      setTokenLoaded(true);
      return;
    }
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
    setTokenLoaded(true);
  }, []);

  const { data, isLoading, error } = useGetUserInfo(
    !bypassAuth && tokenLoaded ? token : null,
  );

  useEffect(() => {
    if (data) {
      setLoggedIn(true);
      setUser(data);
    }
  }, [data]);

  useEffect(() => {
    if (!bypassAuth && tokenLoaded && !token) {
      setLoggedIn(false);
    }
  }, [tokenLoaded, token]);

  useEffect(() => {
    if (error) {
      setLoggedIn(false);
      setUser(null);
      localStorage.removeItem('token');
    }
  }, [error]);

  const logout = () => {
    localStorage.removeItem('token');

    setTimeout(() => {
      window.location.href = `${env.VITE_GAIA_APP_URL}/logout`;
    }, 0);
  };

  return (
    <UserDataContext.Provider
      value={{
        loggedIn,
        logout,
        user,
        loading: isLoading || !tokenLoaded,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataProvider;
