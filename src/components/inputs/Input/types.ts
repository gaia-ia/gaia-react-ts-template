export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  onInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
}
