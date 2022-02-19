import React, { useState, useEffect } from "react";
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
  animationStarted,
  noMaxWidth,
  disableNavigation,
}) => {
  const [isMobileNavEnabled, setIsMobileNavEnabled] = useState(false);
  const [isBackgroundOverlayVisible, setIsBackgroundOverlayVisible] = useState(
    animation || false
  );

  const handleMobileToggle = () => {
    setIsMobileNavEnabled(!isMobileNavEnabled);
  };

  useEffect(() => {
    if (animationStarted && isBackgroundOverlayVisible) {
      const timeout = setTimeout(
        () => setIsBackgroundOverlayVisible(false),
        500
      );
      return () => clearTimeout(timeout);
    }
  }, [animationStarted, isBackgroundOverlayVisible]);

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
          content="deimantas butėnas, deimantas butenas, web development, web developer, frontend, front-end, front end, front end development, front end developer, portfolio, design, web design, react, gatsby, next, nextjs, vue, vuejs, typescript, js, ts, javascript, html, css, scss, sass, git, aws, graphql, sql, amazon web services, redux, lithuania, kaunas, vilnius"
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

      <div
        className={isBackgroundOverlayVisible ? "layout__background-color" : ""}
      ></div>
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
        `}
      >
        <div className="main__background-color"></div>
        <div className="main__background-image-container">
          <StaticImage
            src="../../images/background.jpg"
            alt=""
            className="main__background-image"
            placeholder="dominantColor"
            quality="50"
          />
        </div>
        <div
          className={`
            main__content
            ${noMaxWidth ? "" : " main__content--with-max-width"}
            ${className}
            ${isMobileNavEnabled ? " main__content--hidden" : ""}
          `}
        >
          {children}
        </div>
      </main>

      <footer className="footer"></footer>
    </div>
  );
};
