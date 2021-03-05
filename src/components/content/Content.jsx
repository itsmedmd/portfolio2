import * as React from "react";
import "./content.scss";

export const Content = ({ children }) => {
  return (
    <div className="content">
      <header>header</header>
      <main>
        {children}
      </main>
      <footer>footer</footer>
    </div>
  );
};
