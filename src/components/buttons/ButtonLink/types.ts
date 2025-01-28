import { LinkProps } from 'react-router-dom';

export interface ButtonLinkProps extends LinkProps {
  variant?: 'primary' | 'outlined' | 'text';
}
