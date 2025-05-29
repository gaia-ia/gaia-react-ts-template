import { useGetUserInfo } from '@api/users';
import { env } from '@utils/env';
import { createContext, useEffect, useState } from 'react';

type TUserData = {
  email: string;
  full_name: string;
};

type TUserDataContext = {
  loggedIn: boolean | null;
  logout: () => void;
  user: TUserData | null;
  loading: boolean;
};

export const UserDataContext = createContext<TUserDataContext>({
  loggedIn: null,
  logout: () => {},
  user: null,
  loading: false,
});

const UserDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(null);
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null);
  const [tokenLoaded, setTokenLoaded] = useState(false);
  const [user, setUser] = useState<TUserData | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
    setTokenLoaded(true);
  }, []);

  const { data, isLoading, error } = useGetUserInfo(tokenLoaded ? token : null);

  useEffect(() => {
    if (data) {
      setLoggedIn(true);
      setUser(data);
    }
  }, [data]);

  useEffect(() => {
    if (tokenLoaded && !token) {
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
