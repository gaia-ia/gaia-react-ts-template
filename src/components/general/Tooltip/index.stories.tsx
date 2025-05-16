import type { Meta } from '@storybook/react';

import Tooltip from '.';
import Badge from '../Badge';
import styles from './styles.module.css';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/general/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
      description: 'The text of the tooltip',
      defaultValue: 'Tooltip',
    },
    place: {
      options: ['top', 'bottom', 'left', 'right'],
      control: { type: 'select' },
      defaultValue: 'top',
    },
    color: {
      control: {
        type: 'color',
      },
      description: 'The color of the tooltip',
      defaultValue: 'var(--color-background-100)',
    },
  },
};

export default meta;

export const Default = (args: Meta<typeof Tooltip>) => (
  <div className={styles.tooltip_container_storybook}>
    <Badge id="tooltip-anchor">Hover me</Badge>
    <Tooltip
      text="Tooltip"
      anchorSelect="#tooltip-anchor"
      place="top"
      {...args}
    />
  </div>
);
