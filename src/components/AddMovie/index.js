import React from 'react';
import PropTypes from 'prop-types';
import GenreTypeInput from './GenreTypeInput';
import './addMovie.css';
import { Input } from './Input';

const AddMovie = ({handleClose, handleSubmit, movie}) => {
  const clickClose = (e) => {
    handleReset(e);
    handleClose();
  }

  const handleReset = (e)=> {
    const form = e.currentTarget.closest('form');
    form.reset();
  }

  const getInputValues = (form) => {
    let result = {};
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(element => {
      result[element.id] = element.value;
    });
    return result;
  }
  const clickSubmit = (e) => {
    e.preventDefault();
    const formInput = getInputValues(e.target);
    formInput.key = movie != null ? movie.key : new Date().getTime();
    formInput.image = movie != null ? movie.image : null;
    handleSubmit(formInput);
    clickClose(e);
  }
  return (
    <section className='add-movie-container'>
      <form id="addmovie" onSubmit={clickSubmit}>
      <section className='row'>
        <h1>ADD MOVIE</h1>
        <span onClick={clickClose} className='modal-close'>X</span>
      </section>
      <section className='row'>
        <article className='col'>
          <label for="title">TITLE</label>
          <Input type="text" name="title" value={movie != null ? movie.title : ''}/>
        </article>
        <article className='col'>
          <label for="dateRelease">RELEASE DATE</label>
          <Input type="date" name="dateRelease" value={movie != null ? movie.dateRelease : ''}/>
        </article>
      </section>
      <section className='row'>
        <article  className='col'>
          <label for="url" >MOVIE URL</label>
          <Input type="url" name="url" value={movie != null ? movie.url : ''}/>
        </article>
        <article  className='col'>
          <label for="rating">RATING</label>
          <Input type="number" name="rating" value={movie != null ? movie.rating : ''} />
        </article>
      </section>
      <section className='row'>
        <article className='col'>
          <GenreTypeInput />
        </article>
        <article  className='col'>
          <label for="runtime">RUNTIME</label>
          <Input type="number" name="runtime" value={movie != null ? movie.runtime : ''}/>
        </article>
      </section>
      <section className='row'>
        <article  className='col col-100'>
          <label for="overview">OVERVIEW</label>
          <Input name="story" type="textarea" value={movie != null ? movie.story : ''} />
        </article>
      </section>
      <section className='row button-section'>
        <button className='reset' type='button' onClick={handleReset} disabled={movie != null}> reset </button>
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