import React from "react";
import "./listImageItem.scss";

export const ListImageItem = ({ img, text }) => {
  return (
      <div className="list-image-item">
          <div className="list-image-item__image-container">
            { img && <img className="list-image-item__image" src={img} alt=""/> }
          </div>
          <span className="list-image-item__text">{text}</span>
      </div>
  );
};
