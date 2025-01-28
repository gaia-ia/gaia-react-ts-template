import { useFetch } from '@hooks';

type TAdvice = {
  slip: {
    id: number;
    advice: string;
  };
};

export const useGetAdvice = () => useFetch<TAdvice>(['advice'], '/advice');
