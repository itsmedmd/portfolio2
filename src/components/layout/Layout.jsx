import React from "react";
import "styles/global.scss";
import "./layout.scss";
import { StaticImage } from "gatsby-plugin-image"
import { Navigation } from "components";

export const Layout = ({
  className,
  children,
  noPadding,
  noMaxWidth,
  centered,
  animation,
  disableNavigation
}) => {
  return (
    <div 
      className={`
        layout
        ${animation ? " layout--with-animation" : ""}
      `}
    >
      <div className="layout__background-color"></div>
      <StaticImage
        src="../../images/background.jpg"
        alt=""
        className="layout__background-image"
        placeholder="dominantColor"
        quality="50"
      />

      <header className="header">
        {!disableNavigation && <Navigation/>}
      </header>

      <main
        className={`
          main
          ${noPadding ? " main--no-padding" : ""}
          ${centered ? " main--centered" : ""}
        `}
      >
        <div
          className={`
            main__content
            ${noMaxWidth ? "" : " main__content--with-max-width"}
            ${className}
          `}
        >
          {children}
        </div>
      </main>

      <footer className="footer"></footer>
    </div>
  );
};
