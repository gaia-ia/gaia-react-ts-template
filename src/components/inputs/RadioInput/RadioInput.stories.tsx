import type { Meta, StoryObj } from '@storybook/react';

import Textarea from '.';

const meta: Meta<typeof Textarea> = {
  title: 'Components/inputs/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    error: {
      control: { type: 'text' },
    },
    hint: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    label: 'Label',
    required: true,
  },
};
