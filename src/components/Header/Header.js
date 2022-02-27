import React, { useState } from "react";
import { information } from "../../constant/information";
import "./header.scss";

const headerOptions = [
  {
    key: "home",
    label: "Home",
    route: "",
  },
  {
    key: "about",
    label: "About",
    route: "",
  },
  {
    key: "service",
    label: "Service",
    route: "",
  },
  {
    key: "experience",
    label: "Experience",
    route: "",
  },
  {
    key: "work",
    label: "Work",
    route: "",
  },
  {
    key: "blog",
    label: "Blog",
    route: "",
  },
  {
    key: "contact",
    label: "Contact",
    route: "",
  },
];

function Header() {
  const [headerItem, setHeaderItem] = useState("home");
  return (
    <div className="header flex justifySpaceBetween fs16 fwb alignCenter">
      <div className="name-dot flex alignCenter">
        <div>{information?.firstName}</div>
        <div className="dot" />
      </div>
      <div className="flex">
        {headerOptions?.map((_d) => (
          <div
            className={`header-items ${_d?.key === headerItem && "selected"}`}
            onClick={() => setHeaderItem(_d.key)}
          >
            {_d?.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
