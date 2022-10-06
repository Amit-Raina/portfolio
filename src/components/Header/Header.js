import React, { useState } from "react";
import {useIntl} from 'react-intl'
import { information } from "../../constant/information";
import "./header.scss";

const headerOptions = [
  {
    key: "home",
    labelKey: "header.home",
    route: "",
  },
  {
    key: "about",
    labelKey: "header.about",
    route: "",
  },
  {
    key: "service",
    labelKey: "header.service",
    route: "",
  },
  {
    key: "experience",
    labelKey: "header.experience",
    route: "",
  },
  {
    key: "work",
    labelKey: "header.work",
    route: "",
  },
  {
    key: "blog",
    labelKey: "header.blog",
    route: "",
  },
  {
    key: "contact",
    labelKey: "header.contact",
    route: "",
  },
];

function Header() {
  const intl = useIntl();
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
            {intl.messages[_d.labelKey]}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
