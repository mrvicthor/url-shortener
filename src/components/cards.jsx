import React from "react";
import "./cards.css";
import CardItem from "./cardItem";
import UrlLists from "./urlLists";

function Cards({ items, handleClick }) {
  return (
    <div className="cards" id="features">
      <div className="container">
        <UrlLists items={items} handleClick={handleClick} />
        <div className="card-wrapper">
          <h2 className="card-wrapper-title">Advanced Statistics</h2>
          <div className="card-description-wrapper">
            <p className="card-wrapper-text">
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>
          <div className="card-container">
            <CardItem
              image="/images/icon-brand-recognition.svg"
              title="Brand Recognition"
              text="Boost your brand recognition with each click. Generic links don’t 
  mean a thing. Branded links help instil confidence in your content."
            />
            <CardItem
              image="/images/icon-detailed-records.svg"
              title="Detailed Records"
              text="Gain insights into who is clicking your links. Knowing when and where 
  people engage with your content helps inform better decisions."
            />
            <CardItem
              image="/images/icon-fully-customizable.svg"
              title="Fully Customizable"
              text="Improve brand awareness and content discoverability through customizable 
  links, supercharging audience engagement."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
