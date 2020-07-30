import React from 'react';
import Carousel from '../../components/Carousel';
import BannerMain from '../../components/BannerMain';
import PageDefault from '../../components/PageDefault';
import data from '../../data/dados_iniciais.json';

function Home() {

  const categorias = data.categorias.map((value, index) => {
    return (
      <Carousel key={index} category={value}/>
    )
  })

  return (
    <>
      <PageDefault notStyledBefore={<BannerMain videoTitle= "Panic! At The Disco: I Write Sins Not Tragedies" videoDescription= "Best music of history" url= "https://www.youtube.com/watch?v=vc6vs-l5dkc"/>}>
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
