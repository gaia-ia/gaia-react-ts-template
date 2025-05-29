import { usePostResetPassword } from '@api/auth';
import { Body, Button, Input, Title } from '@components';
import { zodResolver } from '@hookform/resolvers/zod';
import { ToastContext } from '@providers/ToastProvider';
import { ChevronRight, Lock } from 'lucide-react';
import { useContext, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { z } from 'zod';

import styles from './styles.module.css';

const ResetPassword = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [token] = useState(searchParams.get('token') || '');
  const { notify } = useContext(ToastContext);

  const { mutate: resetPassword, status, error } = usePostResetPassword(token);

  const schema = z
    .object({
      password: z
        .string()
        .nonempty(t('errors.required', { input: t('inputs.password.label') })),
      confirmPassword: z
        .string()
        .nonempty(
          t('errors.required', { input: t('inputs.confirmPassword.label') })
        ),
    })
    .superRefine((data, ctx) => {
      if (data.password !== data.confirmPassword) {
        ctx.addIssue({
          code: 'custom',
          message: t('errors.passwordsNotMatch'),
          path: ['confirmPassword'],
        });
      }
    });

  type IReset = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IReset>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<IReset> = () => {
    resetPassword({ password: getValues('password') });
  };

  useEffect(() => {
    if (token) setSearchParams('');
    else notify('Token not found', 'error');
  }, [token]);

  useEffect(() => {
    if (status === 'success') {
      notify('Password changed', 'success');
      navigate('..');
    }

    if (status === 'error') {
      notify(error?.message, 'error');
    }
  }, [status, notify]);

  return (
    <div className={styles.container}>
      <div className={styles.lock_icon}>
        <Lock color="var(--color-text-950)" />
      </div>

      <div className={styles.title}>
        <Title variant="title">{t('Login.resetPassword.title')}</Title>
        <Body variant="small_body">{t('Login.resetPassword.body')}</Body>
      </div>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('password', {
            required: true,
          })}
          id="password"
          type="password"
          placeholder={t('inputs.password.placeholder')}
          label={t('inputs.password.label')}
          error={errors.password?.message}
        />

        <Input
          {...register('confirmPassword', {
            required: true,
          })}
          id="confirmPassword"
          type="password"
          placeholder={t('inputs.confirmPassword.placeholder')}
          label={t('inputs.confirmPassword.label')}
          error={errors.confirmPassword?.message}
        />

        <div className={styles.buttons}>
          <Button type="submit" icon={ChevronRight} iconPosition="right">
            {t('Login.resetPassword.buttons.submit')}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
