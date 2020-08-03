import { useState } from 'react';

export default function useForm(inittialValues) {
  const [Values, setValues] = useState(inittialValues);

  function addValues(key, value) {
    setValues({
      ...Values,
      [key]: value,
    });
    // console.log(Values); // for debug
  }

  function handleChange(event) {
    addValues(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }

  function clearForm() {
    setValues(inittialValues);
  }

  return {
    Values,
    handleChange,
    clearForm,
  };
}
