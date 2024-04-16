import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./components.css";

export default function Moviecards() {
  const [movies, setMovies] = useState([]);
  const [load, setLoad] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d4f3fa61f3df38c5abcb59e9268b5589&page=${load}`);
      let data = await response.json();
      setMovies(prevMovies => [...prevMovies, ...data.results]);
    }
    fetchData();
  }, [load]);

  const truncateOverview = (overview) => {
    const maxLength = 230;
    if (overview.length > maxLength) {
      return overview.substring(0, maxLength) + '...';
    } else {
      return overview;
    }
  };

  const lastPage = 500;

  const incPage = () => {
    if (load < lastPage) {
      setLoad(load + 1);
    }
  }

  return (
    <div className='container my-5'>
      {movies.map((movie, i) => (
        <Link to={`/movie-details/${movie.id}`} key={i} style={{ textDecoration: "none" }}>
          <div className="card" key={i}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
            <h3 style={{ color: "white", textDecoration: "none", padding: "7px 5px", margin: 0 }}>{movie.original_title}</h3>
            <h3 style={{ color: "white", padding: "0px 5px" }}>Language: {movie.original_language}</h3>
            <p style={{ color: "white", padding: "0px 5px" }}>{truncateOverview(movie.overview)}</p>
          </div>
        </Link>
      ))}
      {load < lastPage && <button onClick={incPage} style={{ alignItems: "center", margin: "0px auto" }} className="btn btn-danger">Load More</button>}
    </div>
  )
}
