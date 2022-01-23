import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "gatsby";
import "./navigation.scss";

export const Navigation = ({ toggleMobileNav, isMobileNavEnabled }) => {
  const isDesktop = useMediaQuery({ query: "(min-width: 600px)" });

  const handleMobileToggle = (event) => {
    if (event.keyCode === 13) {
      toggleMobileNav();
    }
  };

  useEffect(() => {
    if (isDesktop && isMobileNavEnabled) {
      toggleMobileNav();
    }
  }, [isDesktop, isMobileNavEnabled, toggleMobileNav]);

  return (
    <>
      <div
        className={isMobileNavEnabled ? "nav-mobile-header-background" : ""}
      ></div>
      <nav className="nav">
        <ul
          className={`nav__list ${
            isMobileNavEnabled ? " nav__list--active" : ""
          }`}
        >
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
          <li className="nav__item nav__item--home">
            <Link
              className="nav__link nav__link--home"
              activeClassName="nav__link--active"
              to="/"
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
            >
              Projects
            </Link>
          </li>
          <li className="nav__item">
            <Link
              className="nav__link"
              activeClassName="nav__link--active"
              to="/about"
            >
              About
            </Link>
          </li>
          <li className="nav__item">
            <Link
              className="nav__link"
              activeClassName="nav__link--active"
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
