import { useMutationFetch } from '@hooks/useFetch';

const baseUrl = '/auth';

type TLoginDTO = {
  email: string;
  password: string;
};

type TLoginRes = {
  token: string;
};

export const usePostLogin = () =>
  useMutationFetch<TLoginRes, TLoginDTO>(`${baseUrl}`, 'post', {
    headers: {
      'Content-Type': 'application/json',
    },
  });

type TForgetPasswordDTO = {
  email: string;
};

export const usePostForgetPassword = () =>
  useMutationFetch<null, TForgetPasswordDTO>(
    `${baseUrl}/password/forget`,
    'post',
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

type TResetPasswordDTO = {
  password: string;
};

export const usePostResetPassword = (token: string) =>
  useMutationFetch<null, TResetPasswordDTO>(
    `${baseUrl}/password/reset`,
    'post',
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );
