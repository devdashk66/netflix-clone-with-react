import { useEffect, useState, CSSProperties } from "react";
import Card from "./card";
// import Popup from "../Popup/";
import "./card.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BeatLoader from "react-spinners/BeatLoader";

function MovieList({ id = false, title, filter, carousel = false }) {
  // =================================
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 1800, min: 1200 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1200, min: 992 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 992, min: 768 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 2,
    },
  };
  // ===================================
  const [moviess, setMovies] = useState([]);
  const [loading, setLoding] = useState("false");
  const [popup, setPopup] = useState(null);

  const getMovie = async () => {
    setLoding(true);
    const responce = await fetch(
      `https://yts.mx/api/v2/list_movies.json?${filter}`
    );
    const data = await responce.json();
    setMovies(data.data.movies);
    setLoding(false);
  };

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div id={id} className="moviesList">
      <h2>{title}</h2>
      {loading && (
        <div className="spinner">
          <BeatLoader color={"#ffffff"} className="spinner" />
        </div>
      )}
      <div className="movies">
        {carousel ? (
          <Carousel
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            responsive={responsive}
            transitionDuration={1000}
            infinite={true}
            pauseOnHover={true}
            draggable={true}
          >
            {moviess.map((movie) => (
              <Card
                onClick={() => setPopup(movie)}
                key={movie.id}
                movies={movie}
                {...movie}
              />
            ))}
          </Carousel>
        ) : (
          <>
            <div className="dflex">
              {moviess.map((movie) => (
                <Card
                  onClick={() => setPopup(movie)}
                  key={movie.id}
                  movies={movie}
                  {...movie}
                />
              ))}
            </div>
          </>
        )}
      </div>
      {popup && (
        <>
          <div className="popup">
            <span onClick={() => setPopup(null)}>❌</span>
            <div className="popupinfo">
              <div className="popImg">
                <img src={popup.medium_cover_image} alt="" />
              </div>
              <div className="popDetels">
                <h3>{popup.title_long}</h3>
                <div className="geners">
                  <p>⭐ {popup.rating}</p>
                  <p>Year: {popup.year}</p>
                  <p>Geners: {popup.genres[0]}</p>
                  <p>Lang: {popup.language}</p>
                </div>
                <p className="popdesc">{popup.description_full}</p>
                <a _blank href={popup.url}>
                  Download
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default MovieList;
