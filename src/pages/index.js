import React, { useState } from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { Layout, PageLoadAnimation } from "components";
import "./index.scss";

const HomePage = () => {
  const [isAnimationActive, setIsAnimationActive] = useState(true);

  const handleAnimationChange = (val) => {
    setIsAnimationActive(val);
  };

  return (
    <Layout className="homepage" animation={isAnimationActive}>
      <Helmet>
        <title>Deimantas Butėnas - Home</title>
      </Helmet>

      <PageLoadAnimation
        text="Deimantas Butėnas"
        sendIsAnimationActiveSignal={handleAnimationChange}
      />
      <h1 className="homepage__title">
        Your friendly neighbourhood spider with a passion for webs
      </h1>
      <div className="homepage__action">
        <Link className="button-link" to="/about">
          About
        </Link>
        <Link className="button-link" to="/projects">
          Projects
        </Link>
        <Link className="button-link" to="/contact">
          Contact
        </Link>
      </div>
    </Layout>
  );
};

export default HomePage;
