import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categoria';

export default function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const [videos, setVideos] = useState([]);
  const { handleChange, Values, clearForm } = useForm({
    title: '',
    url: '',
    categoriaId: '',
  });

  useEffect(() => {
    categoriasRepository
      .getAllCategories()
      .then((categories) => {
        setCategorias(categories);
      });
  }, []);

  // const categoryTitles = categorias.map((category) => { category.title, category.id, });

  /*
  useEffect(async () => {
    const categories = await categoriasRepository.getAllCategories();
    setCategorias(categories);
  }, []);
 */

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        setVideos([
          ...videos,
          Values,
        ]);

        videosRepository.create({
          title: Values.title,
          url: Values.url,
          categoriaId: Values.categoriaId,
        })
          .then(() => {
            history.push('/');
          });
        clearForm();
      }}
      >
        <FormField
          label="Título"
          name="title"
          value={Values.title}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={Values.url}
          onChange={handleChange}
        />

        <FormField
          label=""
          name="categoriaId"
          value={Values.categoriaId}
          onChange={handleChange}
          options={categorias}
        />

        <Button type="submit" defineBackgroundColor>
          Cadastrar
        </Button>
      </form>

      <ul>
        {videos.map((value, index) => {
          const altIndex = `Values_${index}`;
          return (
            <li key={altIndex}>
              {value.title}
            </li>
          );
        })}
      </ul>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}
