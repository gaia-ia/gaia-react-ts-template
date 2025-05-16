import ReactQueryProvider from './ReactQueryProvider';
import ThemeProvider from './ThemeProvider';
import { ToastProvider } from './ToastProvider';
import UserDataProvider from './UserDataProvider';

type Props = {
  children: React.ReactNode;
};

const CoreProvider: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider>
      <ToastProvider>
        <ReactQueryProvider>
          <UserDataProvider>{children}</UserDataProvider>
        </ReactQueryProvider>
      </ToastProvider>
    </ThemeProvider>
  );
};

export default CoreProvider;
