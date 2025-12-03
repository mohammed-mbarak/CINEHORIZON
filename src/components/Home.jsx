import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import { searchMovies, getMovies } from '../services/api';
import '../css/Home.css';

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadMovies = async () => {
            try {
                const data = await getMovies();
                setMovies(data);
            } catch (error) {
                console.error(error);
                setError('An error occurred while fetching movies');
            } finally {
                setLoading(false);
            }
        };

        loadMovies();
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;
        if (loading) return;
        
        setLoading(true);

        try {
            const data = await searchMovies(searchQuery);
            setMovies(data);
            if (data.length === 0) {
                setError('No movies found');
            } else {
                setError(null);
            }
        } catch (error) {
            console.error(error);
            setError('An error occurred while searching for movies');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='home'>
            <form onSubmit={handleSearch} className='search-form'>
                <input 
                    type="text" 
                    placeholder='Search for movies...' 
                    className='search-input' 
                    value={searchQuery} 
                    onChange={e => setSearchQuery(e.target.value)} 
                />
                <button type='submit' className='search-button'>Search</button>
            </form>

            {error && <div className='error-message'>{error}</div>}

            {loading ? ( 
                <div className='loading'>Loading...</div> 
            ) : ( 
                <div className='movies-grid'>
                    {movies.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;