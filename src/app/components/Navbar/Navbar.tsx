import React, { useState } from "react";
import disableScroll from "disable-scroll";
import "./Navbar.css";
import { animateScroll, Link } from "react-scroll";

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => {
    disableScroll.off();
    setClick(!click);
    if (window.scrollY === 0) {
      if (click === false) {
        disableScroll.on();
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    }
  };
  const handleCloseMobile = () => {
    animateScroll.scrollToTop();
    setClick(false);
  };

  const changeBackground = () => {
    if (window.scrollY > 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  if (click === false) {
    window.addEventListener("scroll", changeBackground);
  } else {
    window.removeEventListener("scroll", changeBackground);
  }

  return (
    <>
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="navbar-container">
          <p className="navbar-logo"  onClick={handleCloseMobile}>
            <i className="fas fa-code" />
          </p>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <p className="nav-links" onClick={handleCloseMobile}>
                Home
              </p>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                duration={500}
                offset={0}
                smooth={true}
                className="nav-links"
                onClick={handleClick}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
