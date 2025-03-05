import React from 'react'
import { useMovieContext } from '../contexts/MovieContext';
import '../css/MovieCard.css';

const MovieCard = ({ movie }) => {

    const { addFavorite, removeFavorite, isFavorite } = useMovieContext();
    const isFav = isFavorite(movie);
    
    const handleFavorite = (e) => {
        e.preventDefault();
        if (isFav) {
            removeFavorite(movie);
        } else {
            addFavorite(movie);
        }
    }

  return (
      <div className='movie-card'>
          <div className='movie-poster'>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              <div className='movie-overlay'>
                  <button className={`favorite-btn ${isFav ? "active" : ""}`} onClick={handleFavorite}>
                      ❤
                  </button>
              </div>
          </div>
          <div className='movie-info'>
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
          </div>
    </div>
  )
}

export default MovieCard;