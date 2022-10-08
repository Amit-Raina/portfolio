import React from "react";
import { useIntl } from "react-intl";
import avatar from "../../../assests/images/avatar.svg";
import Button from "../../common/Button";
import Badge from "../../common/Badges";
import { information } from "../../../constant/information";
import ProgressBar from "../../common/ProgressBar";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import CoffeeIcon from "@mui/icons-material/Coffee";
import PeopleIcon from "@mui/icons-material/People";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import "../portfolio.scss";

function AboutMe() {
  const intl = useIntl();
  return (
    <div className="about-me">
      <div className="cm-title mb40">{intl.messages["section.aboutMe"]}</div>
      <div className="flex alignFlexStart mb40">
        <div className="common-avatar-container avatar-w-150">
          <img src={avatar} alt="avatar" className="w-150" />
        </div>
        <div className="about-skills w-100 flex">
          <div className="about-me-desc w-50 flexColumn">
            <div className="mb15">{information?.aboutMe}</div>
            <a
              href="https://drive.google.com/file/d/1H9JjpjuiK-262nF5W38p37rfVe0KylBN/view?usp=sharing"
              download
              target="_blank"
              rel="noreferrer"
            >
              <Button text={intl.messages["button.downloadCv"]} />
            </a>
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
      <div className="about-me-badges w-100 flex justifySpaceBetween">
        <div className="mr10">
          <Badge
            title={intl.messages["badge.projectsCompleted"]}
            count={information.badge.projectsCompleted}
            icon={
              <LocalFireDepartmentIcon
                style={{ width: "45px", height: "45px" }}
              />
            }
          />
        </div>
        <div className="mr10">
          <Badge
            title={intl.messages["badge.cupOfCoffee"]}
            count={information.badge.cupOfCoffee}
            icon={<CoffeeIcon style={{ width: "45px", height: "45px" }} />}
          />
        </div>
        <div className="mr10">
          <Badge
            title={intl.messages["badge.satisfiedClients"]}
            count={information.badge.satisfiedClients}
            icon={<PeopleIcon style={{ width: "45px", height: "45px" }} />}
          />
        </div>
        <div>
          <Badge
            title={intl.messages["badge.nomineesWinner"]}
            count={information.badge.nomineesWinner}
            icon={
              <WorkspacePremiumIcon style={{ width: "45px", height: "45px" }} />
            }
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
