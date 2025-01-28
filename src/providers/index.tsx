import ReactQueryProvider from './ReactQueryProvider';
import ThemeProvider from './ThemeProvider';

type Props = {
  children: React.ReactNode;
};

const CoreProvider: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </ThemeProvider>
  );
};

export default CoreProvider;
