import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "styles/global.scss";
import "./layout.scss";
import { StaticImage } from "gatsby-plugin-image";
import { Navigation } from "components";

export const Layout = ({
  className,
  children,
  noPadding,
  centered,
  animation,
  disableNavigation,
}) => {
  const [isMobileNavEnabled, setIsMobileNavEnabled] = useState(false);

  const handleMobileToggle = () => {
    setIsMobileNavEnabled(!isMobileNavEnabled);
  };

  return (
    <div
      className={`
        layout
        ${animation ? " layout--with-animation" : ""}
      `}
    >
      <Helmet htmlAttributes={{ lang: "en" }}>
        <meta name="title" content="Front-end developer Deimantas Butėnas" />
        <meta
          name="description"
          content="Portfolio website of a front-end developer Deimantas Butėnas."
        />
        <meta
          name="keywords"
          content="deimantas butėnas, deimantas butenas, web development, frontend, front-end, front end, front end development, front end developer, portfolio, design, web design, react, gatsby, javascript, html, css, scss, sass, git, aws, graphql"
        />
        <link rel="canonical" href="https://www.deimantasb.com/" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.deimantasb.com/" />
        <meta
          property="og:title"
          content="Front-end developer Deimantas Butėnas"
        />
        <meta
          property="og:description"
          content="Portfolio website of a front-end developer Deimantas Butėnas where you can see his work!"
        />
        <meta
          property="og:image"
          content="https://www.deimantasb.com/meta-image.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.deimantasb.com/" />
        <meta
          property="twitter:title"
          content="Frontend developer Deimantas Butėnas"
        />
        <meta
          property="twitter:description"
          content="Portfolio website of a front-end developer Deimantas Butėnas where you can see his work!"
        />
        <meta
          property="twitter:image"
          content="https://www.deimantasb.com/meta-image.png"
        />
      </Helmet>

      <div className="layout__background-color"></div>
      <div className="layout__background-image-container">
        <StaticImage
          src="../../images/background.jpg"
          alt=""
          className="layout__background-image"
          placeholder="dominantColor"
          quality="50"
        />
      </div>

      <header
        className={`header ${isMobileNavEnabled ? " header--nav-active" : ""}`}
      >
        {!disableNavigation && (
          <Navigation
            toggleMobileNav={handleMobileToggle}
            isMobileNavEnabled={isMobileNavEnabled}
          />
        )}
      </header>

      <main
        className={`
          main
          ${noPadding ? " main--no-padding" : ""}
          ${centered ? " main--centered" : ""}
          ${isMobileNavEnabled ? " main--hidden" : ""}
        `}
      >
        <div className={`main__content ${className}`}>{children}</div>
      </main>

      <footer className="footer"></footer>
    </div>
  );
};
