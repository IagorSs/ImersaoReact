import React from 'react';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import BannerMain from './components/BannerMain';

function App() {

  localStorage.clear()

  const data = require('./data/dados_iniciais.json');

  const categorias = data.categorias.map((value, index) => {
    return (
      <Carousel key={index} category={value}/>
    )
  })

  return (
    <div style= {{ background: `#656565`}}>
      <Menu/>
      <BannerMain videoTitle= "Panic! At The Disco: I Write Sins Not Tragedies" videoDescription= "Best music of history" url= "https://www.youtube.com/watch?v=vc6vs-l5dkc"/>
      {categorias}
      <Footer/>
    </div>
  );
}

export default App;

/* 
Relload mágico do React
JSX -> JavaScript XML
 */
