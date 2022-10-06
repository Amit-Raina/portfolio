import React from "react";
import {useIntl} from 'react-intl'
import avatar from "../../../assests/images/avatar.svg";
import Button from "../../common/Button";
// import Badges from "../../common/Badges";
import { information } from "../../../constant/information";
import ProgressBar from "../../common/ProgressBar";
import "../portfolio.scss";

function AboutMe() {
  const intl = useIntl();
  return (
    <div className="about-me">
      <div className="cm-title mb25">{intl.messages['section.aboutMe']}</div>
      <div className="flex alignFlexStart mb25">
        <div className="common-avatar-container avatar-w-150">
          <img src={avatar} alt="avatar" className="w-150" />
        </div>
        <div className="about-skills w-100 flex">
          <div className="about-me-desc w-50 flexColumn">
            <div className="mb15">{information?.aboutMe}</div>
            <Button text={intl.messages['button.downloadCv']} />
          </div>
          <div className="about-me-skills-level w-50 flexColumn">
            {information.skills.map((skill) => (
              <div className="mb15">
              <ProgressBar
                label={skill.name}
                percentValue={skill.percent}
                fillColor={skill.color}
              />
            </div>
            ))}
            
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
