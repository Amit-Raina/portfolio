import React from "react";
import avatar from "../../../assests/images/avatar.svg";
import Button from "../../common/Button";
import Badges from "../../common/Badges";
import { information } from "../../../constant/information";

import "../portfolio.scss";
import ProgressBar from "../../common/ProgressBar";

function AboutMe() {
  return (
    <div className="about-me">
      <div className="cm-title mb25">About Me</div>
      <div className="flex alignFlexStart mb25">
        <div className="common-avatar-container avatar-w-150">
          <img src={avatar} alt="avatar" className="w-150" />
        </div>
        <div className="about-skills w-100 flex">
          <div className="about-me-desc w-50 flexColumn">
            <div className="mb15">{information?.aboutMe}</div>
            <Button text="Download CV" />
          </div>
          <div className="about-me-skills-level w-50 flexColumn">
            <div className="mb15">
              <ProgressBar
                label="React-JS"
                percentValue={90}
                fillColor="#FFD15C"
              />
            </div>
            <div className="mb15">
              <ProgressBar
                label="Next-JS"
                percentValue={75}
                fillColor="#FF4C60"
              />
            </div>
            <div>
              <ProgressBar label="Scss" percentValue={90} fillColor="#6C6CE5" />
            </div>
          </div>

          <div className="common-tip" />
        </div>
      </div>
      {/* <div className="about-me-badges w-100 flex">
        <div className="mr10">
          <Badges
            title="React-JS"
            count={90}
            icon="#FFD15C"
          />
        </div>
        <div className="mr10">
          <Badges
            title="React-JS"
            count={90}
            icon="#FFD15C"
          />
        </div>
        <div className="mr10">
          <Badges
            title="React-JS"
            count={90}
            icon="#FFD15C"
          />
        </div>
        <div>
          <Badges
            title="React-JS"
            count={90}
            icon="#FFD15C"
          />
        </div>
      </div> */}
    </div>
  );
}

export default AboutMe;
