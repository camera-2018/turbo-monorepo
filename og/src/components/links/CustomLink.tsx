import clsx from 'clsx';

import UnstyledLink, { UnstyledLinkProps } from './UnstyledLink';

export default function CustomLink({
  children,
  className = '',
  ...rest
}: UnstyledLinkProps) {
  return (
    <UnstyledLink
      {...rest}
      className={clsx(
        'custom-link animated-underline inline-flex items-center font-bold',
        'focus:outline-none ring-primary-400/70 focus-visible:ring',
        'border-b border-dotted border-dark hover:border-black/0',
        className
      )}
    >
      {children}
    </UnstyledLink>
  );
}
