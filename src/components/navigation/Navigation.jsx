import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "gatsby";
import "./navigation.scss";

export const Navigation = ({ toggleMobileNav, isMobileNavEnabled }) => {
  const isDesktop = useMediaQuery({ query: "(min-width: 600px)" });

  const handleNavigate = () => {
    if (isMobileNavEnabled) toggleMobileNav();
  };

  const handleMobileToggle = (event) => {
    if (event.keyCode === 13) toggleMobileNav();
  };

  if (isDesktop && isMobileNavEnabled) {
    toggleMobileNav();
  }

  return (
    <nav className="nav">
      <ul
        className={`nav__list ${
          isMobileNavEnabled ? " nav__list--active" : ""
        }`}
      >
        <li className="nav__item">
          <li className="nav__menu">
            <div
              role="button"
              tabIndex="0"
              onClick={toggleMobileNav}
              onKeyDown={handleMobileToggle}
            >
              <span className="nav__menu-text">MENU</span>
            </div>
          </li>
          <Link
            className="nav__link nav__link--home"
            activeClassName="nav__link--active"
            to="/"
            onClick={handleNavigate}
            tabIndex={isMobileNavEnabled ? "0" : isDesktop ? "0" : "-1"}
          >
            <span className="nav__big-text">DB</span>
            <span className="nav__small-text">Home</span>
          </Link>
        </li>
        <li className="nav__item">
          <Link
            className="nav__link"
            activeClassName="nav__link--active"
            partiallyActive={true}
            to="/projects"
            onClick={handleNavigate}
          >
            Projects
          </Link>
        </li>
        <li className="nav__item">
          <Link
            className="nav__link"
            activeClassName="nav__link--active"
            to="/about"
            onClick={handleNavigate}
          >
            About
          </Link>
        </li>
        <li className="nav__item">
          <Link
            className="nav__link"
            activeClassName="nav__link--active"
            to="/contact"
            onClick={handleNavigate}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
