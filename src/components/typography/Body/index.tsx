import { createElement } from 'react';

import styles from './styles.module.css';
import { BodyProps } from './types';

const Body: React.FC<BodyProps> = ({
  children,
  className,
  as = 'span',
  variant = 'small',
  ...props
}) => {
  return createElement(
    as,
    {
      className: `${styles.body} ${styles[variant]} ${className || ''}`,
      ...props,
    },
    children
  );
};

export default Body;
