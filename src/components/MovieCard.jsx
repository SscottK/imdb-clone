import { Link } from 'react-router-dom';
import styles from './MovieCard.module.scss'

const MovieCard = ({ movie }) => {
    return (
        <div className={styles.movieCard}>
            <Link to={`/movie/${movie.imdbID}`}>
                <img src={movie.Poster} alt={movie.Title} />
                <div className={styles.movieInfo}>
                    <h3>{movie.Title}</h3>
                    <p>{movie.Year}</p>
                </div>
            </Link>
        </div>
    );
};

export default MovieCard