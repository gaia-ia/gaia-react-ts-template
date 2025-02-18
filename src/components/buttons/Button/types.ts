export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outlined' | 'text';
  size?: 'extra-large' | 'large' | 'small';
}
