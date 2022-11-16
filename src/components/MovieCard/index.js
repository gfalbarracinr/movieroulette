import React, { useState } from "react";
import { resolveFilterName } from "../Filter/FilterType";
import { Modal } from "./Modal";
import oval from '../../assets/images/Oval.svg';
import "./movieCard.css"
function MovieCard({movie, image, handleDelete, handleEdit}) {
    const movieDate = new Date(Date.parse(movie.dateRelease));
    const [showModal, setShowModal] = useState(false);
    const handleClick = () => {
        setShowModal(prevState => !prevState);
    }
    const clickDelete = () => {
        setShowModal(false);
        handleDelete();
    }

    const clickEdit = () => {
        setShowModal(false);
        handleEdit();
    }
    return ( 
        <section className="movie-card-container">
            {showModal && <Modal handleDelete={clickDelete} handleEdit={clickEdit}></Modal>}
            <img src={image} alt={`${movie.title} banner`}/>
            <div className="movie-setting" onClick={handleClick}>
                <img src={oval} alt="oval" />
                <img src={oval} alt="oval" />
                <img src={oval} alt="oval" />
            </div>
            <section className="movie-info-container">
                <article className="movie-info">
                    <h1 className="movie-name">{movie.title}</h1>
                    <h2 className="movie-genre">{resolveFilterName(parseInt(movie.genre))}</h2>
                </article>
                <article className="movie-year-container"><p className="movie-year">{movieDate.getFullYear()}</p></article>
            </section>
        </section>
    );
}

MovieCard.propTypes = {
    movie: {
        title: String.isrequired,
        genre: String.isrequired,
        dateRelease: String.isrequired,
        rating: Number.isrequired,
        runtime: Number.isrequired,
        story: String.isrequired,
        key: Number.isrequired
    },
};
export default MovieCard;