import Logo from '@assets/images/logo.svg';
import { Button, ButtonLink, Input, Title } from '@components';
import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './styles.module.css';

const Login = () => {
  const { t } = useTranslation();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <div className={styles.container}>
      <div className={styles.left_side} />
      <div className={styles.right_side}>
        <div className={styles.login_container}>
          <div className={styles.logo}>
            <img src={Logo} alt="Logo" />
          </div>
          <div className={styles.title}>
            <Title variant="small">{t('Login.title')}</Title>
          </div>
          <form action="" className={styles.form}>
            <div className={styles.input_container}>
              <Input
                id="email"
                type="email"
                placeholder={t('inputs.email.placeholder')}
                name="email"
                value={email}
                onInput={e => setEmail(e.target.value)}
              />

              <Input
                id="password"
                type="password"
                placeholder={t('inputs.password.placeholder')}
                name="password"
                value={password}
                onInput={e => setPassword(e.target.value)}
              />

              <ButtonLink to="#" variant="text">
                {t('Login.buttons.forgotPassword')}
              </ButtonLink>
            </div>
            <Button type="submit">{t('Login.buttons.login')}</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
