import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    return (
        <div className='movie-card'>
            <Link to={`/movie/${movie.imdbID}`}>
                <img className="w-16 md:w-32 lg:w-48" src={movie.Poster} alt={movie.Title} />
                <div className='movie-info'>
                    <h3>{movie.Title}</h3>
                    <p>{movie.Year}</p>
                </div>
            </Link>
        </div>
    );
};

export default MovieCard