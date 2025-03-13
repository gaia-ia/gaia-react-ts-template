import Body from '@components/typography/Body';
import { BodyVariant } from '@components/typography/Body/types';
import React from 'react';

import styles from './styles.module.css';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'large',
  icon: Icon,
  iconPosition = 'left',
  ...props
}) => {
  const bodyVariant: BodyVariant =
    size === 'extra_large'
      ? 'body_bold'
      : size === 'large'
        ? 'small_body_bold'
        : 'caption_bold';

  const iconColor =
    variant === 'primary'
      ? 'var(--color-fixed-white)'
      : variant === 'secondary'
        ? 'var(--color-text-900)'
        : 'var(--color-primary-800)';

  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon color={iconColor} />}
      <Body variant={bodyVariant}>{children}</Body>
      {Icon && iconPosition === 'right' && <Icon color={iconColor} />}
    </button>
  );
};

export default Button;
