import Body from 'components/typography/Body';

import styles from './styles.module.css';
import { InputProps } from './types';

const Input: React.FC<InputProps> = ({ label, id, error, ...props }) => {
  return (
    <div className={styles.container}>
      {label && (
        <Body as="label" htmlFor={id} className={styles.label}>
          {label}
        </Body>
      )}
      <div className={styles.input_container}>
        <input id={id} {...props} />
      </div>
      {error && (
        <Body variant="tiny" className={styles.error}>
          {error}
        </Body>
      )}
    </div>
  );
};

export default Input;
