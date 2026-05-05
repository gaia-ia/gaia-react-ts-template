import SquareLogo from '@assets/icons/logos/SquareLogo';
import { Body, ButtonLink, Title } from '@gaia-dev/ui';
import { useTranslation } from 'react-i18next';

import styles from './styles.module.css';

const Dashboard = () => {
  const { t } = useTranslation();

  const logout = () => {
    window.localStorage.removeItem('token');
  };

  return (
    <div className={styles.container}>
      <SquareLogo size="100" />

      <Title>{t('Homepage.title')}</Title>
      <Body>{t('Homepage.body')}</Body>

      <div className={styles.buttons}>
        <ButtonLink className={styles.button} onClick={logout} to="/login">
          {t('Homepage.buttons.logout')}
        </ButtonLink>
      </div>
    </div>
  );
};

export default Dashboard;
