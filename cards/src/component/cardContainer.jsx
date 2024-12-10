import React from "react";
import Cards from "./cards";
import cardData from "./cardData";

function CardContainer() {
  return (
    <div className="card-container">
      {cardData.map((card, index) => (
        <Cards
          key={index}
          image={card.image}
          name={card.name}
          color={card.color}
          des={card.des}
        />
      ))}
    </div>
  );
}

export default CardContainer;
