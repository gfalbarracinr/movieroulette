import React, { useState } from 'react'

export const Input = ({value='', type, name}) => {
  const [inputValue, setInputValue] = useState(value);

  if (type === 'textarea') {
    return (
        <textarea
         className='addMovie-text addMovie-input'
         id={name} 
         name={name} 
         placeholder='Movie description' 
         onChange={(e) => setInputValue(e.target.value)}
         value={inputValue} />
    )
  }
  return (
    <input 
      className='addMovie-input'
      type={type}
      name={name}
      id={name}
      required
      onChange={(e) => setInputValue(e.target.value)}
      value={inputValue}/>
  )
}
