import React from "react";
import "styles/global.scss";
import "./layout.scss";
import { Navigation } from "components";

export const Layout = ({ className, children, noMargin, noPadding }) => {
  return (
    <div className="layout">
      <header className="header">
        <Navigation/>
      </header>
      <main className={`main ${noPadding && "main--no-padding"}`}>
        <div className={`main__content ${className} ${noMargin && "main__content--no-max-width"}`}>
          {children}
        </div>
      </main>
      <footer className="footer"></footer>
    </div>
  );
};
