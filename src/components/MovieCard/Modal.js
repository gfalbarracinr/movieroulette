import React from 'react';
import './movieCard.css';

export const Modal = ({handleEdit, handleDelete}) => {
  return (
    <div className='modal-container'>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}
