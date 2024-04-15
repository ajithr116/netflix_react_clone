import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import { imageURL, API_KEY } from "../../constents/constents.js";
import axios from '../../axios';
import './RowPost.css';

function RowPost(props) {

  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get(props.url)
    .then((res) => {
      console.log(res.data);
      setMovies(res.data.results);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  function MovieDetails({ movie }) {
    return (
      <div className="movie-details">
        <h2>{movie.title}</h2>
        <p>Release Date: {new Date(movie.release_date).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        <p>Vote Average: {movie.vote_average}</p>
        <p>Vote Count: {movie.vote_count}</p>
        {/* Add more details as needed */}
      </div>
    );
  }
  

  const handleMovieTrailer = (id) => {
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
    .then((res) => {
      if(res.data.results.length !== 0){
        setUrlId(res.data.results[0]);
        setShowModal(true);
      }
      else{
        console.log("Trailer not available");
      }
    })
  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj, index) =>
          <div className="poster-container" key={index} onClick={() => handleMovieTrailer(obj.id)}>
            <MovieDetails movie={obj} />
            <img onClick={() => handleMovieTrailer(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageURL+obj.backdrop_path}`} alt='poster' />
          </div>
        )}
      </div>

      {showModal && (
      <div className="modal">
        <button onClick={closeModal}>X</button>
        <div className="modal-content">
          <div className="video">
            <YouTube opts={opts} videoId={urlId.key} />
          </div>
          <div className="details">
            <h2>{urlId.name}</h2> <br/>
            <p>{urlId.description}</p> <br/>
            <p>Release Date: {new Date(urlId.published_at).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            {console.log("------------------"+JSON.stringify(urlId))}
          </div>
        </div>
      </div>
    )}

    </div>
  )
}

export default RowPost;


// import React, { useState, useEffect } from 'react';
// import './RowPost.css';

// function RowPost() {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=3dd1aaa05a0beee725d3c9e2777b2428', {
//         headers: {
//           'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZGQxYWFhMDVhMGJlZWU3MjVkM2M5ZTI3NzdiMjQyOCIsInN1YiI6IjY2MWFjZWFkOGMzMTU5MDE5M2MxOTg5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pgMvEmS9rCUlr9sbcX3bAbj5Ofqera5QoWOgiSSG1IE'
//         }
//       });
//       const data = await response.json();
//       setMovies(data.results);
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="row">
//       <h2>Title</h2>
//       <div className="posters">
//         {movies.map(movie => (
//           <img className='poster' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} key={movie.id} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default RowPost;


