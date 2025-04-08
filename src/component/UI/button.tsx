


'use client';
import { forwardRef } from 'react';
import { Spinner } from './spinner';
import { ButtonProps } from '@/type/button';

// Define size classes for different button sizes
const sizeClasses = {
  sm: 'py-2 px-3 text-sm',
  md: 'py-2.5 px-4 text-base',
  lg: 'py-3 px-5 text-lg',
  xl: 'py-4 px-6 text-xl',
};

// Define variant classes for different button styles
const variantClasses = {
  primary: 'bg-indigo-600 hover:bg-indigo-700 text-white',
  secondary: 'bg-gray-900 hover:bg-gray-800 text-white',
  outline: 'bg-transparent border border-gray-300 hover:bg-gray-50 text-gray-700',
  ghost: 'bg-transparent hover:bg-gray-100 text-gray-700',
  danger: 'bg-red-600 hover:bg-red-700 text-white',
};

// Define rounded corner classes
const roundedClasses = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
};

// Button component using forwardRef
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'button',
      variant = 'primary',
      size = 'md',
      children,
      className = '',
      icon,
      iconPosition = 'left',
      fullWidth = false,
      loading = false,
      disabled = false,
      rounded = 'md',
      ...props
    },
    ref
  ) => {

    const variantClass = variantClasses[variant as keyof typeof variantClasses] || 
      `bg-${variant}-600 hover:bg-${variant}-700 text-white`;

    const widthClass = fullWidth ? 'w-full' : '';
    const disabledClass = disabled || loading ? 'opacity-70 cursor-not-allowed' : '';
    const cursorClass = loading ? 'cursor-wait' : '';

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || loading}
        className={`
          inline-flex items-center justify-center gap-2
          font-medium transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
          ${sizeClasses[size]}
          ${variantClass}
          ${roundedClasses[rounded]}
          ${widthClass}
          ${disabledClass}
          ${cursorClass}
          ${className}
        `}
        {...props}
      >
        {loading && (
          <span className="mr-2">
            <Spinner />
          </span>
        )}
        {!loading && icon && iconPosition === 'left' && (
          <span className="mr-2">{icon}</span>
        )}
        {children}
        {!loading && icon && iconPosition === 'right' && (
          <span className="ml-2">{icon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button'; 