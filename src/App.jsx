import {useState, useEffect} from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
// 7fbad3e0

const API_URL = "http://omdbapi.com?apikey=7fbad3e0";

const movie1 = {
        "Title": "Transformers: Dark of the Moon",
        "Year": "2011",
        "imdbID": "tt1399103",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTkwOTY0MTc1NV5BMl5BanBnXkFtZTcwMDQwNjA2NQ@@._V1_SX300.jpg"
}

const App = () => {


    const [movies, setMovies] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }
    useEffect(() => {
        searchMovies('Transformers');
    }, []);
    return (
        <div className='app'>
            <h1>MovieFlix</h1>

            <div className='search'>
                <input placeholder='Search for movies' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)}/>
            </div>

            {
                movies?.length > 0
                ? (
                    <div className='container'>
                        {/* <MovieCard movie1={movies[0]}/> */}

                        {movies.map((movie) => (
                        <MovieCard movie={movie}/>))}
                    </div>
                ) :

                (
                    <div className='empty'>
                        <h2>No Movies Found!</h2>
                    </div>

                )
            }

            
        </div>
    );
}

export default App;