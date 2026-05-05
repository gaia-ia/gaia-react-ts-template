// Type Definitions
export type SvgProps = {
  size?: string;
  color?: string;
  className?: string;
};

export type SvgComponent = React.FC<SvgProps>;

// Components
export { default as IconSquareLogo } from './logos/SquareLogo';
