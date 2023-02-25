import "./header.css";
import logo from "./logo.png";
import { FaBars } from "react-icons/fa";
import { BiBell, BiSearchAlt } from "react-icons/bi";
import { useEffect, useState } from "react";

function Header() {
  const [show, setShow] = useState(false);

  const showCatagory = () => {
    setShow(!show);
    console.log(show);
  };

  const deviceWidth = () => {
    if (window.innerWidth > 992) {
      setShow(true);
    }
  };
  window.addEventListener("resize", () => {
    deviceWidth();
  });
  useEffect(() => {
    deviceWidth();
  });
  return (
    <header>
      <nav>
        <div className="navWrapper">
          <div className="bar">
            <FaBars onClick={() => showCatagory()} />
          </div>
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          {show && (
            <div className="catagory">
              <a href="#">Home</a>
              <a href="#">TV Shows</a>
              <a href="#">Originals</a>
              <a href="#">Movie</a>
              <a href="#">Recently Added</a>
            </div>
          )}
        </div>

        <div className="search">
          <BiSearchAlt />
          <BiBell />
        </div>
      </nav>
    </header>
  );
}

export default Header;
