import React from "react";
import "./listImageItem.scss";

export const ListImageItem = ({ imgSrc, text }) => {
  return (
      <div className="listImageItem">
          <img className="listImageItem__image" src={imgSrc} alt=""/>
          <span className="listImageItem__text">{text}</span>
      </div>
  );
};
