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
  animation
}) => {
  return (
    <div 
      className={`
        layout
        ${animation ? " layout--with-animation" : ""}
      `}
    >
      <StaticImage
        src="../../images/background.jpg"
        alt=""
        className="layout__background-image"
        placeholder="dominantColor"
        quality="25"
      />

      <header className="header">
        <Navigation/>
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
