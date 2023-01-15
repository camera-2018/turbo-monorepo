import clsx from 'clsx';
import * as React from 'react';
import { ImSpinner2 } from 'react-icons/im';

enum ButtonVariant {
  'dark',
  'light',
  'primary',
}

type ButtonProps = {
  isLoading?: boolean;
  variant?: keyof typeof ButtonVariant;
} & React.ComponentPropsWithoutRef<'button'>;

export default function Button({
  children,
  className,
  disabled: buttonDisabled,
  isLoading,
  variant = 'dark',
  ...rest
}: ButtonProps) {
  const disabled = isLoading || buttonDisabled;

  return (
    <button
      {...rest}
      disabled={disabled}
      className={clsx(
        'rounded py-2 px-4 font-bold hover:text-primary-400',
        'border border-gray-600 shadow-sm',
        'focus:outline-none focus-visible:text-primary-400',
        {
          'bg-dark text-white disabled:bg-gray-700 disabled:hover:text-white':
            variant === 'dark',
          'border-gray-400 bg-white text-dark hover:bg-gray-200 hover:text-dark focus-visible:text-dark disabled:bg-gray-200 disabled:hover:text-dark':
            variant === 'light',
          'border-primary-500 bg-primary-400 text-black hover:bg-primary-400/90 hover:text-black focus-visible:text-dark disabled:brightness-75  disabled:hover:bg-primary-400':
            variant === 'primary',
        },
        'disabled:cursor-not-allowed',
        !disabled && 'animated-underline',
        isLoading &&
          'relative !cursor-wait text-transparent transition-none hover:!text-transparent',
        className
      )}
      style={
        variant === 'primary'
          ? ({
              '--clr-primary-400': 'white',
              '--clr-primary-500': 'white',
            } as React.CSSProperties)
          : undefined
      }
    >
      {isLoading && (
        <div
          className={clsx(
            'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
            variant !== 'dark' ? 'text-black' : 'text-white'
          )}
        >
          <ImSpinner2 className='animate-spin' />
        </div>
      )}
      {children}
    </button>
  );
}
