import React from "react";

function CardItem(props) {
  return (
    <div className="card--item">
      <figure className="cards--item--pic-wrap">
        <img src={props.image} className="cards-item-img" alt="card-icon" />
      </figure>
      <div className="cards--item--body">
        <h3 className="cards--item--header">{props.title}</h3>
        <p className="cards--item--text">{props.text}</p>
      </div>
    </div>
  );
}

export default CardItem;
