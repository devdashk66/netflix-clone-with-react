import "./genre.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function Genre() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 1800, min: 1200 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 1200, min: 992 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 992, min: 768 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 3,
    },
  };
  return (
    <>
      <div className="genreHeader">
        <h2>Explore by Genre</h2>
      </div>
      <div className="genre">
        <Carousel
          autoPlay={true}
          autoPlaySpeed={2500}
          keyBoardControl={true}
          responsive={responsive}
          transitionDuration={100}
          infinite={true}
          pauseOnHover={true}
          draggable={true}
          showDots={false}
          removeArrowOnDeviceType={[
            "superLargeDesktop",
            "desktop",
            "tablet",
            "mobile",
          ]}
        >
          <a className="rated" href="#rated">
            Top Rated
          </a>
          <a className="thriller" href="#thriller">
            Thriller
          </a>
          <a className="action" href="#action">
            Action
          </a>
          <a className="animation" href="#animation">
            Animation
          </a>
          <a className="comedy" href="#crime">
            Crime
          </a>
          <a className="drama" href="#drama">
            Drama
          </a>
          <a className="romance" href="#romance">
            Romance
          </a>
        </Carousel>
      </div>
    </>
  );
}

export default Genre;
