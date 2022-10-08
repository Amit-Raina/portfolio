import React from "react";
import { Scrollbar } from "react-scrollbars-custom";
import "./portfolio.scss";
import AboutMe from "./widgets/AboutMe";
import SocialHandle from "./widgets/SocialHandle";
import Services from "./widgets/Services";

function Portfolio() {
  return (
    <div className="portfolio flexColumn flexGrow">
      <Scrollbar>
          <SocialHandle />
        <div className="common-alignment">
          <AboutMe />
          <Services />
        </div>
      </Scrollbar>
    </div>
  );
}

export default Portfolio;
