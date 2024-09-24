import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import styles from './MovieDetail.module.scss'

const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const apiKey = 'a654bc3d';

    useEffect(() => {
        const fetchMovie = async () => {
            const response = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${apiKey}`);
            setMovie(response.data);
        };
        fetchMovie();
    }, [id]);
    
    if (!movie) return <h1>Loading...</h1>;

    return (
        <div className={styles.movieDetail}>
            <div className={styles.elems}><img src={movie.Poster} alt={movie.Title} /></div>            
            <div className={styles.elems}><h1>{movie.Title}</h1></div>
            <div className={styles.elems}><p>{movie.Plot}</p></div>
            <div className={styles.elems}><p><strong>Director:</strong> {movie.Director}</p></div>
            <div className={styles.elems}><p><strong>Cast:</strong> {movie.Actors}</p></div>
            <div className={styles.elems}><p><strong>Genre:</strong> {movie.Genre}</p></div>
            <div className={styles.elems}><p><strong>Year:</strong> {movie.Year}</p></div>
        </div> 
    )
}

export default MovieDetail;