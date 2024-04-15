import React, { useEffect, useState } from 'react';
import { API_KEY, imageURL } from "../../constents/constents.js";
import './Banner.css';
import axios from '../../axios'

export default function Banner() {

  const [movie, setMovie] = useState();

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`);
      return res.data.results;
    }

    fetchMovies().then(movies => {
      const randomIndex = Math.floor(Math.random() * movies.length);
      setMovie(movies[randomIndex]);
      setInterval(() => {
        const randomIndex = Math.floor(Math.random() * movies.length);
        setMovie(movies[randomIndex]);
      }, 8000); 
    });
  }, []);

  return (
    <div className="banner" style={{backgroundImage: `url(${movie ? imageURL+movie.backdrop_path : "loading"})`}}>
      <div className="content">
        <h1 className="title">{movie ? movie.original_name : "Loading..."}</h1>
        <div className="banner_buttons">
            <button className='button'>Play</button>
            <button className='button'>My list</button>
        </div>
        <h1 className='description'>{movie ? movie.overview : "loading..."}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

// import React, { useState, useEffect } from 'react';
// import './Banner.css';

// export default function Banner() {
//   const [movies, setMovies] = useState([]);
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=3dd1aaa05a0beee725d3c9e2777b2428', {
//         headers: {
//           'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZGQxYWFhMDVhMGJlZWU3MjVkM2M5ZTI3NzdiMjQyOCIsInN1YiI6IjY2MWFjZWFkOGMzMTU5MDE5M2MxOTg5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pgMvEmS9rCUlr9sbcX3bAbj5Ofqera5QoWOgiSSG1IF'
//         }
//       });
//       const data = await response.json();
//       setMovies(data.results);
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % movies.length);
//     }, 3000); // Change index every 3 seconds

//     return () => clearInterval(interval); // Clean up on unmount
//   }, [movies]);

//   return (
//     <div className="banner" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movies[index]?.backdrop_path})` }}>
//       <div className="content">
//         <h1 className="title">{movies[index]?.title || movies[index]?.name || movies[index]?.original_name}</h1>
//         <div className="banner_buttons">
//             <button className='button'>Play</button>
//             <button className='button'>My list</button>
//         </div>
//         <h1 className='description'>{movies[index]?.overview}</h1>
//       </div>
//       <div className="fade_bottom"></div>
//     </div>
//   )
// }
