import React from 'react';
import PropTypes from 'prop-types';
import GenreTypeInput from './GenreTypeInput';
import './addMovie.css';

const AddMovie = ({handleClose, handleSubmit}) => {
  const clickClose = (e) => {
    handleReset(e);
    handleClose();
  }

  const handleReset = (e)=> {
    const form = e.currentTarget.closest('form');
    console.log("form element", form, e.target);
    form.reset();
  }

  const clickSubmit = (e) => {
    e.preventDefault();
    const formInput = 
    handleSubmit(formInput);
  }
  return (
    <section className='add-movie-container'>
      <form id="addmovie" onSubmit={handleSubmit}>
      <section className='row'>
        <h1>ADD MOVIE</h1>
        <span onClick={clickClose} className='modal-close'>X</span>
      </section>
      <section className='row'>
        <article className='col'>
          <label for="title">TITLE</label>
          <input className='addMovie-input' type="text" name="title" id="title" required />
        </article>
        <article className='col'>
          <label for="dateRelease">RELEASE DATE</label>
          <input  className='addMovie-input' type="date" name="dateRelease" id="dateRelease" required />
        </article>
      </section>
      <section className='row'>
        <article  className='col'>
          <label for="url" >MOVIE URL</label>
          <input type="url" className='addMovie-input' name="url" id="url" required />
        </article>
        <article  className='col'>
          <label for="rating">RATING</label>
          <input type="number" className='addMovie-input' name="rating" id="rating" required />
        </article>
      </section>
      <section className='row'>
        <article className='col'>
          <GenreTypeInput />
        </article>
        <article  className='col'>
          <label for="runtime">RUNTIME</label>
          <input type="number" className='addMovie-input' name="runtime" id="runtime" required />
        </article>
      </section>
      <section className='row'>
        <article  className='col col-100'>
          <label for="overview">OVERVIEW</label>
          <textarea className='addMovie-text addMovie-input' id="story" name="story" placeholder='Movie description'>
          </textarea>
        </article>
      </section>
      <section className='row button-section'>
        <button className='reset' type='button' onClick={handleReset}> reset </button>
        <button className='submit' type='submit'> Submit </button>
      </section>
      </form>
    </section>
  )
}


AddMovie.propTypes = {
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}
export default AddMovie;