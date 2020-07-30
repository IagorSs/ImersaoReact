import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

export default function CadastroCategoria(){
  const [categories, setCategories] = useState([]);

  const inittialValues = {
    name: '',
    description: '',
    color: '',
  }

  const [category, setCategory] = useState(inittialValues);

  function setValue(propertie,value) {
    setCategory({
      ...category,
      [propertie]: value
    })
    // console.log(category)
  }

  function handleChange(event) {
    // const { getAttribute, value } = event.target;
    setValue(
      event.target.getAttribute('name'),
      event.target.value
    );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        setCategories([
          ...categories,
          category
        ]);
        setCategory(inittialValues);
      }}>

        <FormField
          label='Nome da Categoria '
          name='name'
          type='text'
          value={category.name}
          onChange={handleChange}
        />

        <FormField
          label='Descrição '
          name='description'
          type='textarea'
          value={category.description}
          onChange={handleChange}
        />

        <FormField
          label='Cor '
          name='color'
          type='color'
          value={category.color}
          onChange={handleChange}
        />

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categories.map((value,index) => {
          return (
            <li key={index}>
              {value.name}
            </li>
          )
        } )}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}
