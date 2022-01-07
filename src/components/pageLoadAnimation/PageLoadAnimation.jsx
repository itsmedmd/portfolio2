import React, { useState, useEffect } from "react";
import "./pageLoadAnimation.scss";

export const PageLoadAnimation = ({
  text,
  sendIsAnimationActiveSignal,
  sendAnimationStartSignal,
}) => {
  const [isActive, setIsActive] = useState(true);
  const [isFinished, setIsFinished] = useState(false);

  const handleMainAnimationEnd = () => {
    setIsFinished(true);
  };

  const handleTextAnimationEnd = (e) => {
    e.stopPropagation();
    setIsActive(false);
  };

  useEffect(() => {
    if (!isActive && isFinished) {
      sendIsAnimationActiveSignal(false);
    }

    const timeout = setTimeout(() => sendAnimationStartSignal(), 200);
    return () => clearTimeout(timeout);
  }, [
    sendIsAnimationActiveSignal,
    sendAnimationStartSignal,
    isActive,
    isFinished,
  ]);

  return (
    <div
      className={`
        page-load-animation
        ${isActive ? "" : " page-load-animation--invisible"}
      `}
      onAnimationEnd={handleMainAnimationEnd}
    >
      <h2
        className="page-load-animation__text"
        onAnimationEnd={handleTextAnimationEnd}
      >
        {text.split(" ").map((word, id) => (
          <span
            key={`page-animation-${text}-${id}`}
            className="page-load-animation__word"
          >
            {word}
          </span>
        ))}
      </h2>
    </div>
  );
};
