import React, { useState } from "react";

function UrlListItem({ item, handleClick }) {
  const [click, setClick] = useState(false);
  const handleTheme = () => {
    setClick(!click);
  };
  return (
    <div onClick={handleTheme} className="list-item">
      <p className="long-link">{item.longLink}</p>
      <p className="short-link">{item.shrtLink}</p>
      <button
        onClick={() => handleClick(item.id)}
        className={click ? "btn-clicked" : "copy-btn"}
      >
        {click ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}

export default UrlListItem;
