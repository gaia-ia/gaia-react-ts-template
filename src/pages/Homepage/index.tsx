import SquareLogo from '@assets/icons/logos/SquareLogo';
import { Body, Button, Title } from '@gaia-dev/ui';
import { UserDataContext } from '@providers/UserDataProvider';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './styles.module.css';

const Homepage = () => {
  const { t } = useTranslation();
  const { logout } = useContext(UserDataContext);

  return (
    <div className={styles.container}>
      <SquareLogo title="Gaia" size="100" />

      <Title>{t('Homepage.title')}</Title>
      <Body>{t('Homepage.body')}</Body>

      <div className={styles.buttons}>
        <Button className={styles.button} onClick={logout}>
          {t('Homepage.buttons.logout')}
        </Button>
      </div>
    </div>
  );
};

export default Homepage;
