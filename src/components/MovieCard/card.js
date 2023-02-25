import "./card.css";
import { BsFillStarFill } from "react-icons/bs";
import Fade from "react-reveal/Fade";

function Card({ medium_cover_image, title_long, rating, year, onClick }) {
  return (
    <>
      <Fade right>
        <div onClick={onClick} className="card">
          <img src={medium_cover_image} alt="" />
          <span>
            <BsFillStarFill />
            {rating}
            <span>{year}</span>
          </span>
          <h3>{title_long}</h3>
        </div>
      </Fade>
    </>
  );
}

export default Card;
