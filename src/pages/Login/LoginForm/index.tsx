import { usePostLogin } from '@api/auth';
import { Button, ButtonLink, Input, Title } from '@gaia-dev/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { ToastContext } from '@providers/ToastProvider';
import { ChevronRight } from 'lucide-react';
import { useContext, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

import styles from './styles.module.css';

const LoginForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { notify } = useContext(ToastContext);

  const { mutate: login, status, error, data, isPending } = usePostLogin();

  const schema = z.object({
    email: z
      .string()
      .nonempty(t('errors.required', { input: t('inputs.email.label') }))
      .email(
        t('errors.invalidFormat', {
          input: t('inputs.email.label'),
        })
      ),
    password: z
      .string()
      .nonempty(t('errors.required', { input: t('inputs.password.label') })),
  });

  type ILoginForm = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<ILoginForm> = () => {
    login({ email: getValues('email'), password: getValues('password') });
  };

  useEffect(() => {
    if (status === 'success') {
      notify('Login success', 'success');
      localStorage.setItem('token', data?.token);
      navigate('/');
    }

    if (status === 'error') {
      notify(error?.message, 'error');
    }
  }, [status, notify]);

  return (
    <div className={styles.login_container}>
      <div className={styles.title}>
        <Title variant="title">{t('Login.title')}</Title>
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

          <ButtonLink
            to="forget"
            variant="text"
            className={styles.forgot_password}
          >
            {t('Login.buttons.forgotPassword')}
          </ButtonLink>
        </div>
        <Button
          type="submit"
          icon={ChevronRight}
          iconPosition="right"
          loading={isPending}
        >
          {t('Login.buttons.login')}
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
