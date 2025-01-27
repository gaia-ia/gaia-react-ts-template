import { useGetAdvice } from '@api/advice';
import Logo from '@assets/images/logo.svg';
import { Body, Button, ButtonLink, Title } from '@components';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './styles.module.css';

const Homepage = () => {
  const { t, i18n } = useTranslation();
  const { data } = useGetAdvice();

  const changeLanguage = () => {
    const lng = i18n.language;

    switch (lng) {
      case 'en':
        i18n.changeLanguage('pt');
        break;
      case 'pt':
        i18n.changeLanguage('es');
        break;
      default:
        i18n.changeLanguage('en');
        break;
    }
  };

  useEffect(() => {
    if (data) console.log(data.slip.advice);
  }, [data]);

  return (
    <div className={styles.container}>
      <img src={Logo} alt="Logo" />

      <Title>{t('Homepage.title')}</Title>
      <Body>{t('Homepage.body')}</Body>

      <div className={styles.buttons}>
        <Button className={styles.button} onClick={changeLanguage}>
          {t('Homepage.buttons.changeLanguage')}
        </Button>

        <ButtonLink className={styles.button} to="/login">
          {t('Homepage.buttons.login')}
        </ButtonLink>
      </div>
    </div>
  );
};

export default Homepage;
