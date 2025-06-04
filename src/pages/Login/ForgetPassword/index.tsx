import { usePostForgetPassword } from '@api/auth';
import { Body, Button, ButtonLink, Input, Title } from '@gaia-dev/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { ToastContext } from '@providers/ToastProvider';
import { ChevronRight, Lock } from 'lucide-react';
import { useContext, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

import styles from './styles.module.css';

const ForgetPassword = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { notify } = useContext(ToastContext);

  const { mutate: forgetPassword, status, error } = usePostForgetPassword();

  const schema = z.object({
    email: z
      .string()
      .nonempty(t('errors.required', { input: t('inputs.email.label') }))
      .email(
        t('errors.invalidFormat', {
          input: t('inputs.email.label'),
        })
      ),
  });

  type IForget = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IForget>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<IForget> = () => {
    forgetPassword({ email: getValues('email') });
  };

  useEffect(() => {
    if (status === 'success') {
      notify('Email sent', 'success');
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
        <Title variant="title">{t('Login.forgotPassword.title')}</Title>
        <Body variant="small_body">{t('Login.forgotPassword.body')}</Body>
      </div>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('email', {
            required: true,
          })}
          id="email"
          type="email"
          placeholder={t('inputs.email.placeholder')}
          label={t('inputs.email.label')}
          error={errors.email?.message}
        />

        <div className={styles.buttons}>
          <Button type="submit" icon={ChevronRight} iconPosition="right">
            {t('Login.forgotPassword.buttons.send')}
          </Button>
          <ButtonLink to=".." variant="text">
            {t('Login.forgotPassword.buttons.return')}
          </ButtonLink>
        </div>
      </form>
    </div>
  );
};

export default ForgetPassword;
