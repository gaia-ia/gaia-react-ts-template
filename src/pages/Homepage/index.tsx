import { useGetAdvice } from '@api/advice';
import SquareLogo from '@assets/icons/logos/SquareLogo';
import { Body, ButtonLink, Title } from '@components';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './styles.module.css';

const Homepage = () => {
  const { t } = useTranslation();
  const { data } = useGetAdvice();

  const logout = () => {
    window.localStorage.removeItem('token');
  };

  useEffect(() => {
    // eslint-disable-next-line no-console
    if (data) console.log(data.slip.advice);
  }, [data]);

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

export default Homepage;
