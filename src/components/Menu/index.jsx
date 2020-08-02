import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
// import ButtonLink from './ButtonLink';
import Button from '../Button';

export default function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="IrFlix Logo" />
      </Link>
      {/*
      <ButtonLink className="ButtonLink" href="/cadastro/video" >
        Componente alternativo
      </ButtonLink>
      */}
      <Button as={Link} to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
}
