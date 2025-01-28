import Body from 'components/typography/Body';

import styles from './styles.module.css';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  ...props
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className}`}
      {...props}
    >
      <Body>{children}</Body>
    </button>
  );
};

export default Button;
