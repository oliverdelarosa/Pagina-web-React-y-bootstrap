import React from "react";
import Card from "./Card";
import image1 from "../asset/image1.jpg";
import image2 from "../asset/image2.jpg";
import image3 from "../asset/image3.jpg";

const Cards = () => {
  const cards = [
    {
      id: 1,
      title: "Fazt web",
      image: image1,
      url: "https://faztweb.com",
    },
    {
      id: 2,
      title: "Fazt blog",
      image: image2,
      url: "https://blog.faztweb.com",
    },
    {
      id: 3,
      title: "Fazt youtube",
      image: image3,
      url: "https://youtube.com/fazttech",
    },
  ];
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map((card) => (
          <div className="col-md-4" key={card.id}>
            <Card title={card.title} imageSource={card.image} url={card.url} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Cards;
