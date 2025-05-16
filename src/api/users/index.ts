import { useQueryFetch } from '@hooks';

type TUser = {
  email: string;
  full_name: string;
  organization_id: string;
};

export const useGetUserInfo = (token: string | null) => {
  return useQueryFetch<TUser>(
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
