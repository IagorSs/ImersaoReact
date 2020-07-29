import React from 'react';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Carousel from './components/Carousel';

function App() {

  localStorage.clear()

  const data = require('./data/dados_iniciais.json');

  const categorias = data.categorias.map((value, index) => {
    return (
      <Carousel category={value}/>
    )
  })

  return (
    <nav>
      <Menu/>
      {categorias}
      <Footer/>
    </nav>
  );
}

export default App;

/* 
Relload mágico do React
JSX -> JavaScript XML
 */
