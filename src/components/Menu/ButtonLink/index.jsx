import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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

ButtonLink.defaultProps = {
  className: '',
  href: '',
  children: '',
};

ButtonLink.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.string,
};
