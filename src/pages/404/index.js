import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import { Layout } from "components";
import "./index.scss";

const NotFoundPage = () => {
  return (
    <Layout className="not-found" disableNavigation={true}>
      <Helmet>
        <title>Deimantas Butėnas - Page not found</title>
      </Helmet>

      <section className="page__section">
        <h1 className="not-found__title">Sorry, this page does not exist.</h1>
      </section>

      <section className="page__section">
        <h2 className="not-found__suggestion">Instead you can visit the home page:</h2>
        <div className="page__action page__action--no-margin">
          <Link className="button-link" to="/">Home</Link>
        </div>
      </section>

      <section className="page__section">
        <h2 className="not-found__suggestion">Or if you'd rather explore:</h2>
        <div className="page__action page__action--no-margin">
          <Link className="button-link" to="/about">About</Link>
          <Link className="button-link" to="/projects">Projects</Link>
          <Link className="button-link" to="/contact">Contact</Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFoundPage;
