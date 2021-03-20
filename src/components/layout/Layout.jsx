import React, { useEffect } from "react";
import "styles/global.scss";
import "./layout.scss";
import { Navigation, PageAnimation } from "components";

export const Layout = ({ className, children }) => {
  useEffect(() => {
  });

  return (
    <div className="layout">
      <PageAnimation/>
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
