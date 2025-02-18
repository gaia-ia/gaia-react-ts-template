import Body from 'components/typography/Body';

import styles from './styles.module.css';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'large',
  ...props
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}
      {...props}
    >
      <Body>{children}</Body>
    </button>
  );
};

export default Button;
