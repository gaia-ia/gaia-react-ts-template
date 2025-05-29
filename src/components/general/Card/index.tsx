import styles from './styles.module.css';
import type { CardProps } from './types';

const Card = ({ children, className }: CardProps) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>{children}</div>
  );
};

export default Card;
