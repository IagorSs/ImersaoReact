import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoryRepositorie from '../../../repositories/categoria';

const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 1.5em;
`;

export default function CadastroCategoria() {
  const inittialValues = {
    title: '',
    description: '',
    color: '',
  };

  const { handleChange, Values, clearForm } = useForm(inittialValues);

  const [categories, setCategories] = useState([]);

  return (
    <PageDefault>
      <Title>Cadastro de Categoria</Title>

      <form onSubmit={(event) => {
        event.preventDefault();
        setCategories([
          ...categories,
          Values,
        ]);

        categoryRepositorie.create(Values);

        clearForm();
      }}
      >

        <FormField
          label="Título da Categoria "
          name="title"
          value={Values.title}
          onChange={handleChange}
        />

        <FormField
          label="Descrição "
          name="description"
          type="textarea"
          value={Values.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor "
          name="color"
          type="color"
          value={Values.color}
          onChange={handleChange}
        />

        <Button type="submit" defineBackgroundColor>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categories.map((value, index) => {
          const altIndex = `Values_${index}`;
          return (
            <li key={altIndex}>
              {value.title}
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
