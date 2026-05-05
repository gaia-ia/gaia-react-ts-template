import { Sidebar } from '@components';
import { UserDataContext } from '@providers/UserDataProvider';
import { Folder } from 'lucide-react';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './styles.module.css';

type Props = {
  children: React.ReactNode;
};

const AppLayout: React.FC<Props> = ({ children }) => {
  const { user, logout } = useContext(UserDataContext);
  const { t } = useTranslation();

  const defaultLinks = [
    {
      icon: Folder,
      title: t('Homepage:title'),
      to: '/homepage',
    },
  ];

  return (
    <div className={styles.layout}>
      <Sidebar defaultLinks={defaultLinks} handleLogout={logout} user={user} />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default AppLayout;
