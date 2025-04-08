import { InputHTMLAttributes } from 'react';

export type InputVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  className?: string;
  variant?: InputVariant;
  size?: InputSize | string | number; 
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  wrapperClassName?: string;
}