import React from "react";
import "./pageLoadAnimation.scss";

export const PageLoadAnimation = ({ text }) => {
  return (
      <div className="page-load-animation">
        <h2 className="page-load-animation__text">
          {
            text.split(" ")
              .map((word, id) => 
                <span
                  key={`page-animation-${text}-${id}`}
                  className="page-load-animation__word"
                >
                  {word}
                </span>
              )
          }
        </h2>
      </div>
  );
};
