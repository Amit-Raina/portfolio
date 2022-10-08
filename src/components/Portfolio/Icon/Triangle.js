import React from "react";

const Traingle = ({ ...props }) => {
  return (
    <svg
      width="26"
      height="26"
      class="layer p2"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13 3.3541L2.42705 24.5h21.1459L13 3.3541z"
        stroke="#FF4C60"
        stroke-width="3"
        fill="none"
        fill-rule="evenodd"
      ></path>
    </svg>
  );
};

export default Traingle
