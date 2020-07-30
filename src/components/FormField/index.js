import React from 'react';



export default function FormField({ type, name, label, value, onChange}){

  const content = (type === 'textarea') ? (
      <textarea
        rows='5'
        cols='30'
        style={{resize: 'none'}}
        name={name}
        value={value}
        onChange={onChange}
      />
    ):(
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    )

  return (
    <div>
      <label>
        {label}        
        {content}
      </label>
    </div>
  )
}
