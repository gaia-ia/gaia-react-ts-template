import { Sidebar } from '@components/index';
import { UserDataContext } from '@providers/UserDataProvider';
import { Folder } from 'lucide-react';
import React, { useContext } from 'react';

import styles from './styles.module.css';

type Props = {
  children: React.ReactNode;
};

const AppLayout: React.FC<Props> = ({ children }) => {
  const { user, logout } = useContext(UserDataContext);

  const defaultLinks = [
    {
      icon: Folder,
      title: 'Dashboard',
      to: '/dashboard',
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
