import React from 'react'
import GenreTypeInput from './GenreTypeInput';
import './addMovie.css';

const AddMovie = () => {
  return (
    <section className='add-movie-container'>
      <h1>ADD MOVIE</h1>
      <form id="addmovie">
      <section className='row'>
        <article className='col'>
          <label for="title">TITLE</label>
          <input type="text" name="title" id="title" required />
        </article>
        <article className='col'>
          <label for="dateRelease">RELEASE DATE</label>
          <input type="date" name="dateRelease" id="dateRelease" required />
        </article>
      </section>
      <section className='row'>
        <article  className='col'>
          <label for="url">MOVIE URL</label>
          <input type="url" name="url" id="url" required />
        </article>
        <article  className='col'>
          <label for="rating">RATING</label>
          <input type="number" name="rating" id="rating" required />
        </article>
      </section>
      <section className='row'>
        <article className='col'>
          <GenreTypeInput />
        </article>
        <article  className='col'>
          <label for="runtime">RUNTIME</label>
          <input type="number" name="runtime" id="runtime" required />
        </article>
      </section>
      <section className='row'>
        <article  className='col'>
          <label for="overview">OVERVIEW</label>
          <textarea id="story" name="story" placeholder='Movie description'>
          </textarea>
        </article>
      </section>
      </form>
      
    </section>
  )
}

export default AddMovie;