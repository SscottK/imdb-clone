import { useState } from "react";
import axios from "axios";
import MovieCard from '../components/MovieCard';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [movies, setMovies] = useState([]);

    const apiKey = 'a654bc3d';

    const searchMovies = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.get(`http://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`);
            setMovies(response.data.Search || [])
        } catch (error) {
            console.error(error)
        }
    };

    return (
        <div className="home-container">
            <form onSubmit={searchMovies}>
                <input type="text" 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search movies..." 
                />
                <button type="submit">Search</button>
            </form>
            <div className="movie-list">
                {movies.map((movie) => {
                    return <MovieCard key={movie.imdbID} movie={movie} />
                })}
            </div>
        </div>
    )
}

export default Home