import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import "./components.css"
import Navbar from './Navbar';

export default function MovieDetails() {

  const [movieDetails, setMovieDetails] = useState(null);
  let location = useLocation();
  let currentId = location.pathname.split('/')[2]

  useEffect(()=>{
    const fetchData = async () => {
      let response = await fetch(`https://api.themoviedb.org/3/movie/${currentId}?api_key=d4f3fa61f3df38c5abcb59e9268b5589`)
      let data = await response.json();
      setMovieDetails(data);
    }
    fetchData();
  })

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar/>
      {
          (<div className='box'>
            <div className="upper-content">
              <div className="img">
                <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} alt="" />
              </div>
              <div className="title">
                <h1>{movieDetails.original_title}</h1>
                <p>Language : {movieDetails.original_language}</p>
                <p>Ratting : {movieDetails.vote_average}</p>
                <p>Release Data : {movieDetails.release_date}</p>
                <p>Popularity : {movieDetails.popularity}</p>
              </div>
           </div>

            <div className="lower-content">
              <p><span>Overview</span> : {movieDetails.overview}</p>
            </div>
          </div>)
      }
    </>
  )
}

