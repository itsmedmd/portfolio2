import React from "react";
import "./listImageItem.scss";

export const ListImageItem = ({ img, text }) => {
  return (
      <div className="list-image-item">
          <img className="list-image-item__image" src={require(`images/${img}`)} alt=""/>
          <span className="list-image-item__text">{text}</span>
      </div>
  );
};
