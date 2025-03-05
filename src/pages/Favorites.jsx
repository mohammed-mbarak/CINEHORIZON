import React from 'react';
import { useMovieContext } from '../contexts/MovieContext';
import MovieCard from '../components/MovieCard';
import '../css/Favorites.css';

const Favorites = () => {
    const { favorites } = useMovieContext();

    if (!favorites || favorites.length === 0) {
        return <h2>No favorites added yet.</h2>;
    }

    return (
        <div className='favorites'>
            <h2>Your Favorites Movies</h2>
            <div className='movies-grid'>
                {favorites.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default Favorites;
