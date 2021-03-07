import * as React from "react";
import { Link } from "gatsby";
import "./navigation.scss";

export const Navigation = () => {
  return (
    <nav className="nav">
        <Link className="nav__link" activeClassName="nav__link--active" to="/">
            <span className="nav__big-text">DB</span>Home
        </Link>
        <Link
            className="nav__link"
            activeClassName="nav__link--active"
            partiallyActive={true}
            to="/projects/"
        >
            Projects
        </Link>
        <Link className="nav__link" activeClassName="nav__link--active" to="/about/">
            About
        </Link>
        <Link className="nav__link" activeClassName="nav__link--active" to="/contact/">
            Contact
        </Link>
    </nav>
  );
};
