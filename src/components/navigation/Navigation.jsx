import React from "react";
import { Link } from "gatsby";
import "./navigation.scss";

export const Navigation = () => {
  return (
    <nav className="nav">
        <ul className="nav__list">
            <li className="nav__item">
                <Link className="nav__link nav__link--home" activeClassName="nav__link--active" to="/">
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
                <Link className="nav__link" activeClassName="nav__link--active" to="/about">
                    About
                </Link>
            </li>
            <li className="nav__item">
                <Link className="nav__link" activeClassName="nav__link--active" to="/contact">
                    Contact
                </Link>
            </li>
        </ul>
    </nav>
  );
};
