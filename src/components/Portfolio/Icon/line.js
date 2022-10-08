import React from "react";

const Line = ({ ...props }) => {
  return (
    <svg
      width="15"
      height="23"
      class="layer p5"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        transform="rotate(30 9.86603 10.13397)"
        x="7"
        width="3"
        height="25"
        rx="1.5"
        fill="#6C6CE5"
        fill-rule="evenodd"
      ></rect>
    </svg>
  );
};

export default Line;
