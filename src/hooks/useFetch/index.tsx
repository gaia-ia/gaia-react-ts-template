import { api } from '@libs/axios';
import {
  type UseMutationOptions,
  type UseMutationResult,
  type UseQueryOptions,
  type UseQueryResult,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import type { AxiosError, AxiosRequestConfig } from 'axios';

export function useQueryFetch<TData>(
  queryKey: string[],
  endpoint: string,
  config?: AxiosRequestConfig,
  options?: Omit<UseQueryOptions<TData, AxiosError>, 'queryKey' | 'queryFn'>
): UseQueryResult<TData> {
  const fetchQueryFn = async (): Promise<TData> => {
    try {
      const res = await api.get<TData>(endpoint, config);
      return res.data;
    } catch (error) {
      const err = error as AxiosError;

      if (err.response?.status === 404 && err.response.data) {
        return err.response.data as TData;
      }

      throw err;
    }
  };

  return useQuery<TData, AxiosError>({
    queryKey,
    queryFn: fetchQueryFn,
    refetchOnWindowFocus: false,
    retry: (failureCount, error) => {
      return error.response?.status !== 404 && failureCount < 3;
    },
    ...options,
  });
}

export function useMutationFetch<TData, TVariables = unknown>(
  endpoint: string,
  method: 'post' | 'put' | 'delete' | 'patch',
  config?: AxiosRequestConfig,
  options?: Omit<UseMutationOptions<TData, Error, TVariables>, 'mutationFn'>
): UseMutationResult<TData, Error, TVariables> {
  const fetchMutationFn = async (data: TVariables): Promise<TData> => {
    const res =
      method === 'delete'
        ? await api.delete<TData>(endpoint, {
            ...(config ?? {}),
            ...(data ? { data } : {}),
          })
        : await api[method]<TData>(endpoint, data, config);
    return res.data;
  };

  return useMutation<TData, Error, TVariables>({
    mutationFn: fetchMutationFn,
    ...options,
  });
}
