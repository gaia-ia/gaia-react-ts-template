import { api } from '@libs/axios';
import {
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import { AxiosRequestConfig } from 'axios';

export function useQueryFetch<TData>(
  queryKey: string[],
  endpoint: string,
  config?: AxiosRequestConfig,
  options?: Omit<UseQueryOptions<TData, Error>, 'queryKey' | 'queryFn'>
): UseQueryResult<TData> {
  const fetchQueryFn = async (): Promise<TData> => {
    const res = await api.get<TData>(endpoint, config);
    return res.data;
  };

  return useQuery<TData>({
    queryKey,
    queryFn: fetchQueryFn,
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
    const res = await api[method]<TData>(endpoint, data, config);
    return res.data;
  };

  return useMutation<TData, Error, TVariables>({
    mutationFn: fetchMutationFn,
    ...options,
  });
}
