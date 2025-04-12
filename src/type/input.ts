// import { InputHTMLAttributes } from 'react';

// export type InputVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
// export type InputSize = 'sm' | 'md' | 'lg';

// export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
//   className?: string;
//   variant?: InputVariant;
//   size?: InputSize | string | number; 
//   fullWidth?: boolean;
//   leftIcon?: React.ReactNode;
//   rightIcon?: React.ReactNode;
//   wrapperClassName?: string;
// }


export interface InputProps {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  wrapperClassName?: string;
  error?: boolean;
  id?: string;
  className?: string;
  [key: string]: any; // Allow any other props
}