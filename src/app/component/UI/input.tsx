// File: components/Input.tsx
import { InputProps } from '@/app/type/input';
import React, { forwardRef } from 'react';

const sizeClasses = {
  sm: 'h-8 text-sm peer-placeholder-shown:text-sm peer-focus:text-xs',
  md: 'h-10 text-base peer-placeholder-shown:text-base peer-focus:text-sm',
  lg: 'h-12 text-lg peer-placeholder-shown:text-lg peer-focus:text-sm',
};

const variantClasses = {
  primary: 'ring-2 ring-gray-500 focus:ring-primary-500 focus:border-primary-500',
  secondary: 'ring-1 ring-gray-200 focus:ring-primary-500 focus:border-primary-500',
  outline: 'ring-2 ring-gray-300 focus:ring-primary-500 focus:border-primary-500',
  ghost: 'ring-0 hover:ring-1 hover:ring-gray-200 focus:ring-1 focus:ring-primary-500',
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = '',
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      leftIcon,
      rightIcon,
      wrapperClassName = '',
      id,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      'peer bg-transparent rounded-lg text-gray-900 placeholder-transparent focus:outline-none transition-all duration-200';
    const widthClass = fullWidth ? 'w-full' : 'w-72'; // Default width from example is w-72

    return (
      <div
        className={`relative bg-white p-4 rounded-lg ${widthClass} ${wrapperClassName}`}
      >
        {leftIcon && (
          <span className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
            {leftIcon}
          </span>
        )}
        <input
          ref={ref}
          id={id}
          className={`${baseClasses}  ${variantClasses[variant]} ${
            leftIcon ? 'pl-10' : 'px-2'
          } ${rightIcon ? 'pr-10' : ''} ${widthClass} ${className}`}
          {...props}
        />
        {props.placeholder && (
          <label
            htmlFor={id}
            className={`absolute left-4 -top-1 text-sm text-gray-500 bg-white mx-1 px-1 
              peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 
              peer-placeholder-shown:top-6 peer-focus:-top-1 peer-focus:text-primary-500 
              peer-focus:text-sm transition-all cursor-text ${
                leftIcon ? 'left-10' : ''
              }`}
          >
            {props.placeholder}
          </label>
        )}
        {rightIcon && (
          <span className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
            {rightIcon}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;