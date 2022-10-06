import React from "react";
import "./badges.scss";

function Badges({
  title = "",
  style = {},
  onClick = () => {},
  count = 0,
  icon = null,
}) {
  return (
    <div className="badges flex justifyCenter" style={style} onClick={onClick}>
      <div className="badges-icon">{icon}</div>
      <div className="flexColumn">
        <div className="badges-count"></div>
        <div className="badges-title"></div>
      </div>
    </div>
  );
}

export default Badges;
