import { Body, Button } from '@components';
import { Check } from 'lucide-react';

import styles from './styles.module.css';
import { ChassisCardButtonProps } from './types';

const ChassisCardButton: React.FC<ChassisCardButtonProps> = ({
  chassis,
  onClick,
  selected,
}) => {
  return (
    <div className={styles.chassis_card}>
      <button
        onClick={e => {
          onClick(e);
        }}
      >
        {selected && (
          <div className={styles.selected_layer}>
            <Check size={48} color="var(--color-fixed-white)" />
          </div>
        )}
        <img src={chassis.thumbnail} alt={chassis.title} />
      </button>
      <div className={styles.chassis_card_info}>
        <Body variant="small_body">{chassis.title}</Body>
        <Button variant="secondary" size="small">
          Prévia
        </Button>
      </div>
    </div>
  );
};

export default ChassisCardButton;
