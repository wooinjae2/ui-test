import React, { useEffect, useState, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    //async await에서는 try catch 로 에러처리를 하고
    // 없을경우는 catch chaing method에서 처리를 한다.
    try {
      const response = await fetch("https://swapi.dev/api/films/");

      console.log(response);

      const data = await response.json();
      if (!response.ok) {
        throw new Error("something went wrong");
      }

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });

      console.log("transformedMovies", transformedMovies);
      setMovies(transformedMovies);
    } catch (error) {
      console.dir(error);
      setError(error);
    }
    setIsLoading(false);
  }, []);


  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  let content = <p>Found no movies</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error.message}</p>;
  }

  if (isLoading) {
    content = <p> Loading... </p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
