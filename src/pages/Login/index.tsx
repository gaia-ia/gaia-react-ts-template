import Logo from '@assets/images/logo.svg';
import { Button, ButtonLink, Input, Title } from '@components';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

import styles from './styles.module.css';

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const schema = z.object({
    email: z
      .string()
      .nonempty(t('errors.required', { input: t('inputs.email.label') }))
      .email(
        t('errors.invalidFormat', {
          input: t('inputs.email.label'),
        })
      )
      .refine(
        email => email === 'admin@gaia.dev',
        t('errors.invalidInput', {
          input: t('inputs.email.label'),
        })
      ),
    password: z
      .string()
      .nonempty(t('errors.required', { input: t('inputs.password.label') }))
      .refine(
        password => password === 'admin',
        t('errors.invalidInput', {
          input: t('inputs.password.label'),
        })
      ),
  });

  type ILoginForm = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<ILoginForm> = () => {
    window.localStorage.setItem('token', '123');
    navigate('/');
  };

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
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.input_container}>
              <Input
                {...register('email', {
                  required: true,
                })}
                id="email"
                type="email"
                placeholder={t('inputs.email.placeholder')}
                error={errors.email?.message}
              />

              <Input
                {...register('password', {
                  required: true,
                })}
                id="password"
                type="password"
                placeholder={t('inputs.password.placeholder')}
                error={errors.password?.message}
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
