import React from 'react';
import Carousel from '../../components/Carousel';
import BannerMain from '../../components/BannerMain';
import PageDefault from '../../components/PageDefault';
import data from '../../data/dados_iniciais.json';

function Home() {
  const categorias = data.categorias.map((value, index) => {
    const thisKey = `CarouselCategory_${index}`;
    return (<Carousel key={thisKey} category={value} />);
  });

  return (
    <>
      <PageDefault
        notStyledBefore={(
          <BannerMain
            videoTitle="EU SOU BURRO"
            videoDescription="Best channel of history"
            url="https://www.youtube.com/watch?v=_jqYXrv2Kdw"
          />
      )}
      >
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
