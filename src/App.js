import React, {useState, useEffect } from 'react';

import MoviesList from './components/MovieList';
import './App.css';

function App() {
  const [movies,setMovies] = useState([])


  function fetchMoviesHandler() {

  

    fetch('https://swapi.dev/api/films/')
    .then(
      res => {
        return res.json();
      }
    ).then(data => {
      const transformedMovies = data.results.map(movieData => {
        return {
          id: movieData.episode_id,
          title:  movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date
        }
      })
      setMovies(transformedMovies);
    });
  }

  const dummyMovies = [
    {
      id: 1,
      title: 'Some Dummy Movie',
      openingText: 'This is the opening text of the movie',
      releaseDate: '2021-05-18',
    },
    {
      id: 2,
      title: 'Some Dummy Movie 2',
      openingText: 'This is the second opening text of the movie',
      releaseDate: '2021-05-19',
    },
    {
      id: 3,
      title: 'Some Dummy Movie 3',
      openingText: 'This is the third opening text of the movie',
      releaseDate: '2021-05-20',
    }
  ]

  return (
    <React.Fragment>
    <section>
      <button onClick={fetchMoviesHandler}>Fetch Movies</button>
    </section>
    <section>
     <MoviesList movies={movies} />
    </section>
  </React.Fragment>
  );
}

export default App;
