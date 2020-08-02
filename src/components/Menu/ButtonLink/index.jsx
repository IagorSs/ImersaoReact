import React from 'react';
import { Link } from 'react-router-dom';

export default function ButtonLink({
  className,
  href,
  children,
}) {
  return (
    <Link className={className} to={href}>
      {children}
    </Link>
  );
}
