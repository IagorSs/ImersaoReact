import React from 'react';
import Carousel from '../../components/Carousel';
import BannerMain from '../../components/BannerMain';
import PageDefault from '../../components/PageDefault';

function Home() {

  localStorage.clear()

  const data = require('../../data/dados_iniciais.json');

  const categorias = data.categorias.map((value, index) => {
    return (
      <Carousel key={index} category={value}/>
    )
  })

  return (
    <>
      <PageDefault>
        <BannerMain videoTitle= "Panic! At The Disco: I Write Sins Not Tragedies" videoDescription= "Best music of history" url= "https://www.youtube.com/watch?v=vc6vs-l5dkc"/>
        {categorias}
      </PageDefault>
    </>
  );
}

export default Home;

/* 
Relload mágico do React
JSX -> JavaScript XML
 */
