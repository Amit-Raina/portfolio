import React from "react";
import "./card.scss";

function Card({
  title = "",
  description = "",
  style = {},
  onClick = () => {},
  icon = null,
}) {
  return (
    <div
      className="card flexColumn justifyCenter p30"
      style={style}
      onClick={onClick}
    >
      {icon && <div className="card-icon mb10">{icon}</div>}
      <div className="card-title fs20 fwb mb20">{title}</div>
      <div className="card-description fs16">{description}</div>
    </div>
  );
}

export default Card;
