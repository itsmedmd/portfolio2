import * as React from "react";
import "style/global.scss";
import "./layout.scss";
import { Navigation } from "components";

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="header">
        <Navigation/>
      </header>
      <main className="main">
        {children}
      </main>
      <footer className="footer"></footer>
    </div>
  );
};
