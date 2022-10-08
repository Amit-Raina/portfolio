import React from "react";

function Badge({
  title = "",
  style = {},
  onClick = () => {},
  count = 0,
  icon = null,
}) {
  return (
    <div className="badges flex justifyCenter" style={style} onClick={onClick}>
      {icon && <div className="badges-icon mr15">{icon}</div>}
      <div className="flexColumn">
        <div className="badges-count fs30 fwb mb10">{count}</div>
        <div className="badges-title fs16">{title}</div>
      </div>
    </div>
  );
}

export default Badge;
