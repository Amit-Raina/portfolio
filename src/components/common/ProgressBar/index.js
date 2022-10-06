import React from "react";
import "./progressBar.scss";

function ProgressBar({
  label = "",
  style = {},
  onClick = () => {},
  percentValue = 0,
  fillColor = 'green'
}) {
  return (
    <div
      className="progress-bar flexColumn justifyCenter"
      style={style}
      onClick={onClick}
    >
      <div className="flex justifySpaceBetween w-100 mb15">
        <div className="progress-text mr10">{label}</div>
        <div className="progress-percentValue">{percentValue}%</div>
      </div>
      <div className="progress-bar-outer-container w-100">
        <div className="progress-bar-inner-container" style={{ width: `${percentValue}%`, backgroundColor: fillColor }}></div>
      </div>
    </div>
  );
}

export default ProgressBar;
