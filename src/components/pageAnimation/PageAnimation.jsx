import React, { useState, useEffect } from "react";
import "./pageAnimation.scss";

export const PageAnimation = () => {
  const [animate, setAnimate] = useState(false);
  const elementCount = 9;
  const elementLines = 3;

  const gridStyle = {
    gridTemplateColumns: `repeat(${elementCount / elementLines}, 1fr)`,
    gridTemplateRows: `repeat(${elementLines}, 1fr)`
  };

  useEffect(() => {
    setAnimate(true);
  }, []);

  const createElements = () => {
    const arr = [];
    for(let i = 0; i < elementCount; i++) {
        arr.push(
        <div
            className="page-animation__element"
            key={`overlay-el-${i}`}
        >
            <div className={
                `page-animation__sub-element 
                ${animate && "page-animation__sub-element--active"}`}
                ></div>
        </div>
        );
    }
    return arr;
  };

  return (
    <div className={`page-animation 
        ${animate && "page-animation--active"}`} 
        style={gridStyle}
    >
        {createElements()}
  </div>
  );
};
