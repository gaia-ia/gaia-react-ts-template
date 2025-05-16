import styles from './styles.module.css';
import type { DividerProps } from './types';

const Divider = ({ color = 'var(--color-background-300)' }: DividerProps) => {
  return (
    <div className={styles.separator} style={{ backgroundColor: color }} />
  );
};

export default Divider;
