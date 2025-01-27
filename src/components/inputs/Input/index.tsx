import Body from 'components/typography/Body';

import styles from './styles.module.css';
import { InputProps } from './types';

const Input: React.FC<InputProps> = ({ label, id, ...props }) => {
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
    </div>
  );
};

export default Input;
