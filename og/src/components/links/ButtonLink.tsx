import clsx from 'clsx';

import UnstyledLink, { UnstyledLinkProps } from './UnstyledLink';

enum ButtonVariant {
  'dark',
  'light',
  'primary',
}

type ButtonLinkProps = {
  variant?: keyof typeof ButtonVariant;
} & UnstyledLinkProps;

export default function ButtonLink({
  children,
  className = '',
  variant = 'dark',
  ...rest
}: ButtonLinkProps) {
  return (
    <UnstyledLink
      {...rest}
      className={clsx(
        'animated-underline inline-block rounded py-2 px-4 font-bold hover:text-primary-400',
        'border border-gray-600 shadow-sm',
        'focus:outline-none focus-visible:text-primary-400',
        {
          'bg-dark text-white': variant === 'dark',
          'border-gray-400 bg-white text-dark hover:bg-gray-200 hover:text-dark focus-visible:text-dark':
            variant === 'light',
          'border-primary-500 bg-primary-400 text-black hover:bg-primary-400/90 hover:text-black focus-visible:text-dark':
            variant === 'primary',
        },
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
      {children}
    </UnstyledLink>
  );
}
