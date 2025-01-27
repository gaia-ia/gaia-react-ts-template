import { Link } from 'react-router-dom';

import Body from 'components/typography/Body';

import styles from './styles.module.css';
import { ButtonLinkProps } from './types';

const ButtonLink: React.FC<ButtonLinkProps> = ({
  children,
  variant = 'primary',
  className,
  ...props
}) => {
  return (
    <Link
      className={`${styles.button} ${styles[variant]} ${className}`}
      {...props}
    >
      <Body>{children}</Body>
    </Link>
  );
};

export default ButtonLink;
