import { createElement } from 'react';

import styles from './styles.module.css';
import { TitleProps } from './types';

const Title: React.FC<TitleProps> = ({
  children,
  className,
  as = 'span',
  variant = 'large',
  ...props
}) => {
  return createElement(
    as,
    {
      className: `${styles.title} ${styles[variant]} ${className || ''}`,
      ...props,
    },
    children
  );
};

export default Title;
