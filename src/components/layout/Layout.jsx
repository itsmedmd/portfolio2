import * as React from "react";
import "styles/global.scss";
import "./layout.scss";
import { Navigation } from "components";

export const Layout = ({ className, children }) => {
  return (
    <div className="layout">
      <header className="header">
        <Navigation/>
      </header>
      <main className="main">
        <div className={`main__content ${className}`}>
          {children}
        </div>
      </main>
      <footer className="footer"></footer>
    </div>
  );
};
