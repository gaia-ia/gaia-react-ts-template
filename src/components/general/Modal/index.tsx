import Button from '@components/buttons/Button';
import Title from '@components/typography/Title';
import { X } from 'lucide-react';

import styles from './styles.module.css';
import { ModalButtonsProps, ModalContentProps } from './types';

const Content: React.FC<ModalContentProps> = ({
  children,
  setOpen,
  title,
  className,
}) => {
  return (
    <>
      <div className={styles.background} onClick={() => setOpen(false)} />
      <div className={`${styles.modal} ${className}`}>
        <div className={styles.header}>
          <Title variant="subtitle">{title}</Title>
          <Button
            variant="icon"
            icon={X}
            onClick={() => setOpen(false)}
            className={styles.close_button}
          />
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </>
  );
};

const Buttons: React.FC<ModalButtonsProps> = ({ children, className }) => {
  return <div className={`${styles.buttons} ${className}`}>{children}</div>;
};

export default { Content, Buttons };
