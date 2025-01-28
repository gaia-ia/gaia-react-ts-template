import type { Meta, StoryObj } from '@storybook/react';

import Title from '.';

const meta: Meta<typeof Title> = {
  title: 'Components/typography/Title',
  tags: ['autodocs'],
  component: Title,
  argTypes: {
    variant: {
      options: ['large', 'medium', 'small', 'tiny'],
      control: { type: 'radio' },
      defaultValue: 'small',
    },
    as: {
      options: ['span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'label'],
      control: { type: 'radio' },
      defaultValue: 'span',
    },
    children: {
      defaultValue: 'Some text here',
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    children: 'Some text here',
    variant: 'small',
    as: 'span',
  },
};
