import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
// import ButtonLink from './ButtonLink';
import Button from '../Button';

export default function Menu() {

  return(
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="IrFlix Logo" />
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Novo vídeo
      </Button>
    </nav>
  );
}
