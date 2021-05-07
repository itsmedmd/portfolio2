import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "./listImageItem.scss";

export const ListImageItem = ({ img, text }) => {
  return (
      <div className="listImageItem">
          <img className="listImageItem__image" src={require(`images/${img}`)} alt=""/>
          <span className="listImageItem__text">{text}</span>
      </div>
  );
};
