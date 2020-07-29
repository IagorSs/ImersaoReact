import React from 'react';
import { Link } from 'react-router-dom';

export default function ButtonLink(props) {

  return (
    <Link className={props.className} to={props.href}>
      {props.children}
    </Link>
  );

}
