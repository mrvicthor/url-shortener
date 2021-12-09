import React from "react";
import UrlListItem from "./urlListItem";
import "./urlLists.css";

function UrlLists({ items, handleClick }) {
  return (
    <div className="list-wrapper">
      {items.map((item) => (
        <UrlListItem handleClick={handleClick} key={item.id} item={item} />
      ))}
    </div>
  );
}

export default UrlLists;
