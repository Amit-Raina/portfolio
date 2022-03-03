import React, { useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import avatar from "../../../assests/images/avatar.svg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { information } from "../../../constant/information";
import Button from "../../common/Button";

import "../portfolio.scss";

function SocialHandle() {
  const [dynamicProffesion] = useState(0);

  return (
    <div className="social-handle flexColumn justifyCenter alignCenter">
      <div className="avatar-container mb25 flex justifyCenter w-100">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="cm-title mb15 w-100 flex justifyCenter">
        {information?.fullName}
      </div>
      <div className="dynamic-sub-title mb15 fs18 w-100 flex justifyCenter">
        I'm a {information?.proffession[dynamicProffesion]}.
      </div>
      <div className="social-links flex alignCenter w-100 justifyCenter mb25">
        <InstagramIcon className="mr10 icon-hover" />
        <TwitterIcon className="mr10 icon-hover" />
        <FacebookIcon className="mr10 icon-hover" />
        <LinkedInIcon className="icon-hover" />
      </div>
      <div>
        <Button text="Hire me" />
      </div>
    </div>
  );
}

export default SocialHandle;
