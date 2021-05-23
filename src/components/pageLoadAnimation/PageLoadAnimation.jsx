import React, { useState, useEffect } from "react";
import "./pageLoadAnimation.scss";

export const PageLoadAnimation = ({ text, sendIsAnimationActiveSignal }) => {
  const [isActive, setIsActive] = useState(true);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const handleAnimationFinish = () => {
      sendIsAnimationActiveSignal(false);
      setIsFinished(true);
    }; 

    const timeout1 = setTimeout(() => setIsActive(false), 1500);
    const timeout2 = setTimeout(handleAnimationFinish, 2000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [sendIsAnimationActiveSignal]);

  return (
      <div
        className={`
          page-load-animation
          ${isActive ? "" : " page-load-animation--invisible"}
          ${isFinished ? " page-load-animation--finished" : ""}
        `}
      >
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
