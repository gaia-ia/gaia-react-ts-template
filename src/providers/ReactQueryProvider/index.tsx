import { queryClient } from '@libs/react-query';
import { QueryClientProvider } from '@tanstack/react-query';

type Props = {
  children: React.ReactNode;
};

const ReactQueryProvider: React.FC<Props> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;
