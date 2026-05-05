import { useQueryFetch } from '@hooks';
import type { TUserInfo } from '@types';

export const useGetUserInfo = (token: string | null) => {
  return useQueryFetch<TUserInfo>(
    ['userInfo'],
    '/users/info',
    token
      ? {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      : undefined,
    {
      retry: false,
      staleTime: 0,
      refetchOnWindowFocus: true,
      enabled: !!token,
    }
  );
};
