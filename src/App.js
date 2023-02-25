import "./App.css";
import Genre from "./components/Genre";
import Header from "./components/Header";
import HeroSlider from "./components/Hero_Slider";
import MovieList from "./components/MovieCard";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <>
      <Header />
      <ScrollToTop smooth />
      <HeroSlider />
      <Genre />
      <MovieList id="rated" carousel="true" filter="" title="Top Rated ⭐" />
      <MovieList
        id="thriller"
        carousel="true"
        filter="genre=thriller"
        title="Thriller Movies 🤔"
      />
      <MovieList
        id="action"
        carousel="true"
        filter="genre=action"
        title="Action Movies 🔥"
      />

      <MovieList
        id="animation"
        filter="genre=animation"
        title="Animation Movies"
      />
      <MovieList
        carousel="true"
        id="crime"
        filter="genre=crime"
        title="Crime Movies"
      />
      <MovieList
        carousel="true"
        id="drama"
        filter="genre=drama"
        title="Drama Movies"
      />
      <MovieList id="romance" filter="genre=romance" title="Romance Movies" />
    </>
  );
}

export default App;
