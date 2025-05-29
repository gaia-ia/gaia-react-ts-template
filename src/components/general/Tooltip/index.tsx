import Body from '@components/typography/Body';
import { Tooltip as T } from 'react-tooltip';

import styles from './styles.module.css';
import type { TooltipProps } from './types';

const Tooltip = ({
  text,
  anchorSelect,
  place = 'top',
  color = 'var(--color-background-100)',
}: TooltipProps) => {
  return (
    <T
      className={styles.tooltip}
      anchorSelect={anchorSelect}
      place={place}
      style={{ backgroundColor: color }}
    >
      <Body variant="small_body">{text}</Body>
    </T>
  );
};

export default Tooltip;
