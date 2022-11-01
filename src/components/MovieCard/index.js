import React from "react";
import { resolveFilterName } from "../Filter/FilterType";
import "./movieCard.css"
function MovieCard({movie, image}) {
    return ( 
        <section className="movie-card-container">
            <img src={image} alt={`${movie.name} banner`}/>
            <section className="movie-info-container">
                <article className="movie-info">
                    <h1 className="movie-name">{movie.name}</h1>
                    <h2 className="movie-genre">{resolveFilterName(movie.genre)}</h2>
                </article>
                <article className="movie-year-container"><p className="movie-year">{movie.year}</p></article>
            </section>
        </section>
    );
}

MovieCard.propTypes = {
    movie: {
        name: String.isrequired,
        genre: String.isrequired,
        year: Number.isrequired
    },
    image: Element.isrequired
};
export default MovieCard;