// components/ui/Input.tsx
import { InputProps } from '@/type/Input';
import React, { forwardRef } from 'react';


const Input = forwardRef<HTMLInputElement, InputProps >(
  (
    {
      className = '',
      variant = 'default',
      size = 'md',
      fullWidth = false,
      leftIcon,
      rightIcon,
      wrapperClassName = '',
      error = false,
      id,
      ...props
    },
    ref
  ) => {

    // Base classes that apply to all inputs
    const baseClasses = [
      'w-full rounded-md bg-white text-gray-900',
      'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'transition-all duration-200',
    ].join(' '); 

    // Error state
    const errorClasses = error ? 'border-red-500 focus:ring-red-500 focus:ring-opacity-50' : '';

    // Handle icon padding
    const iconPaddingClasses = [
      leftIcon ? 'pl-10' : '',
      rightIcon ? 'pr-10' : '',
    ].join(' ');

    // Combine all classes
    const inputClasses = [
      baseClasses,
      // variantClasses,
      // sizeClasses,
      errorClasses,
      iconPaddingClasses,
      className,
    ].join(' ');

    // Wrapper classes
    const wrapperClasses = [
      'relative',
      fullWidth ? 'w-full' : 'w-[280px]',
      wrapperClassName,
    ].join(' ');

    return (
      <div className={wrapperClasses}>
        {leftIcon && (
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {leftIcon}
          </span>
        )}
        <input
          ref={ref}
          // id={id}
          className={inputClasses}
          {...props}
        />
        {rightIcon && (
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {rightIcon}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;