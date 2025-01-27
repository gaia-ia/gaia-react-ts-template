import type { Meta, StoryObj } from '@storybook/react';

import ButtonLink from '.';

const meta: Meta<typeof ButtonLink> = {
  title: 'Components/buttons/ButtonLink',
  component: ButtonLink,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
      description: 'The text to display inside the button',
      defaultValue: 'Click me',
    },
    to: {
      control: {
        type: 'text',
      },
      defaultValue: 'https://gaia.dev',
      description: 'The link to navigate to',
    },
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'outlined', 'text'],
      },
      defaultValue: 'primary',
    },
    target: {
      control: {
        type: 'select',
        options: ['_blank', '_self', '_parent', '_top'],
      },
      defaultValue: '_blank',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonLink>;

export const Primary: Story = {
  args: {
    children: 'Click me',
    variant: 'primary',
    to: 'https://gaia.dev',
    target: '_blank',
  },
};

export const Outlined: Story = {
  args: {
    children: 'Click me',
    variant: 'outlined',
    to: 'https://gaia.dev',
    target: '_blank',
  },
};

export const Text: Story = {
  args: {
    children: 'Click me',
    variant: 'text',
    to: 'https://gaia.dev',
    target: '_blank',
  },
};
