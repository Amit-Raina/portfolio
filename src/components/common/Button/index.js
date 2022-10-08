import React from "react";
import "./button.scss";

function Button({ text = "", style = {}, onClick = () => {} }) {
  return (
    <div className="custon-button flex justifyCenter fs16" style={style} onClick={onClick}>
      <div className="custon-button-text">{text}</div>
    </div>
  );
}

export default Button;
