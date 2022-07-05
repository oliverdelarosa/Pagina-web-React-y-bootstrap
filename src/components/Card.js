import React from "react";
import Prototype from "prop-types";
import "./cards.css";
const Card = ({ title, imageSource, url }) => {
  return (
    <div className="card text-center bg-dark">
      <img src={imageSource}></img>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
          La documentación es la ciencia que consiste en documentar, y se
          encuentra identificada por el procesamiento de información que
          otorgará datos específicos sobre un tema determinado; de acuerdo a
          esto
        </p>
        <a href={url} className="btn btn-outline-secondary" target="_blank">
          go to this website
        </a>
      </div>
    </div>
  );
};
Card.Prototype = {
  title: Prototype.string.isRequired,
  url: Prototype.string,
  imageSource: Prototype.string,
};
export default Card;
