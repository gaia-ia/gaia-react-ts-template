import ReactQueryProvider from './ReactQueryProvider';

type Props = {
  children: React.ReactNode;
};

const CoreProvider: React.FC<Props> = ({ children }) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};

export default CoreProvider;
