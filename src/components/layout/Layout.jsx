import React from "react";
import "styles/global.scss";
import "./layout.scss";
import { Navigation } from "components";

export const Layout = ({ className, children, noPadding, noMaxWidth, centered }) => {
  return (
    <div className="layout">
      <header className="header">
        <Navigation/>
      </header>
      <main className={`main ${noPadding ? "main--no-padding" : ""} ${centered ? "main--centered" : ""}`}>
        <div className={`main__content ${noMaxWidth ? "" : "main__content--with-max-width"} ${className}`}>
          {children}
        </div>
      </main>
      <footer className="footer"></footer>
    </div>
  );
};
