import React, { useEffect, useState } from 'react';
import Carousel from '../../components/Carousel';
import BannerMain from '../../components/BannerMain';
import PageDefault from '../../components/PageDefault';
// import data from '../../data/dados_iniciais.json';
import categoriesRepository from '../../repositories/categoria';

function Home() {
  const [inittialData, setInittialData] = useState([]);

  useEffect(() => {
    categoriesRepository.getAllCategoriesWithVideos()
      .then((categoriesWithVideos) => {
        setInittialData(categoriesWithVideos);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err.message);
      });
  }, []);
  /*
  const categorias = data.categorias.map((value, index) => {
    const thisKey = `CarouselCategory_${index}`;
    return (<Carousel key={thisKey} category={value} />);
  });
 */
  const categorias = inittialData.map((categorie) => (
    <Carousel
      key={categorie.id}
      category={categorie}
    />
  ));

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
