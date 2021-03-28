import React from "react";
import { Link } from "gatsby";
import { Layout } from "components";
import "./index.scss";

const HomePage = () => {
  return (
    <Layout className="homepage">
      <h1 className="homepage__title">
        Your friendly neighbourhood spider with a passion for webs
      </h1>
      <div className="homepage__action">
        <Link className="button-link" to="/about">About</Link>
        <Link className="button-link" to="/projects">Projects</Link>
        <Link className="button-link" to="/contact">Contact</Link>
      </div>
    </Layout>
  );
};

export default HomePage;
