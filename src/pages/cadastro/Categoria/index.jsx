import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

export default function CadastroCategoria() {
  const [categories, setCategories] = useState([]);

  const inittialValues = {
    name: '',
    description: '',
    color: '',
  };

  const [category, setCategory] = useState(inittialValues);

  function setValue(propertie, value) {
    setCategory({
      ...category,
      [propertie]: value,
    });
    // console.log(category)
  }

  function handleChange(event) {
    // const { getAttribute, value } = event.target;
    setValue(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }

  useEffect(() => {
    const URL = 'http://localhost:3000/categories';
    fetch(URL)
      .then(async (res) => {
        const JSONres = await res.json();
        setCategories([
          ...JSONres,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        setCategories([
          ...categories,
          category,
        ]);
        setCategory(inittialValues);
      }}
      >

        <FormField
          label="Nome da Categoria "
          name="name"
          type="text"
          value={category.name}
          onChange={handleChange}
        />

        <FormField
          label="Descrição "
          name="description"
          type="textarea"
          value={category.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor "
          name="color"
          type="color"
          value={category.color}
          onChange={handleChange}
        />

        <Button defineBackgroundColor>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categories.map((value, index) => {
          const altIndex = `category_${index}`;
          return (
            <li key={altIndex}>
              {value.name}
            </li>
          );
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}
