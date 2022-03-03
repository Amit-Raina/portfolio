import React from "react";
import "./portfolio.scss";
import AboutMe from "./widgets/AboutMe";
import SocialHandle from "./widgets/SocialHandle";

function Portfolio() {
  return <div className="portfolio flexColumn flexGrow">
    <SocialHandle />
    <AboutMe />
  </div>;
}

export default Portfolio;
