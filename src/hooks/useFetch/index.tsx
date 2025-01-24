import { api } from '@libs/axios';
import {
  UseQueryOptions,
  UseQueryResult,
  useQuery,
} from '@tanstack/react-query';

export function useFetch<TData>(
  queryKey: string[],
  endpoint: string,
  options?: Omit<UseQueryOptions<TData, Error>, 'queryKey' | 'queryFn'>
): UseQueryResult<TData> {
  return useQuery<TData>({
    queryKey,
    queryFn: async () => {
      const res = await api.get<TData>(endpoint);
      return res.data;
    },
    ...options,
  });
}

export default useFetch;
