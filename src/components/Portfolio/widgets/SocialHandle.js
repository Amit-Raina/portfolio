import React, { useState } from "react";
import { useIntl } from "react-intl";
import Typewriter from "typewriter-effect";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import avatar from "../../../assests/images/avatar.svg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { information } from "../../../constant/information";
import Button from "../../common/Button";
import Traingle from "../Icon/Triangle";
import Line from "../Icon/line";
import SemiCircle from "../Icon/SemiCircle";
import TwoSemiCricle from "../Icon/TwoSemiCricle";
import "../portfolio.scss";

function SocialHandle() {
  const intl = useIntl();
  const [cursorPostion, setCursorPostion] = useState({ x: 0, y: 0 });

  const getCursor = (e) => {
    setCursorPostion({
      x: e.clientX / 50,
      y: e.clientY / 50,
    });
  };

  return (
    <div className="social-handle flexColumn justifyCenter alignCenter">
      <div style={{ zIndex: 1}}>
      <div className="common-avatar-container mb25 flex justifyCenter w-100">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="cm-title mb15 w-100 flex justifyCenter">
        {information?.fullName}
      </div>
      <div className="dynamic-sub-title mb15 fs18 w-100 flex justifyCenter">
        I'm a&nbsp;
        <Typewriter
          options={{
            strings: information?.proffession,
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div className="social-links flex alignCenter w-100 justifyCenter mb25">
        <InstagramIcon className="mr10 icon-hover" />
        <TwitterIcon className="mr10 icon-hover" />
        <FacebookIcon className="mr10 icon-hover" />
        <LinkedInIcon className="icon-hover" />
      </div>
      <div>
        <Button text={intl.messages["button.contactMe"]} />
      </div>
      </div>

      <div
        className="background-shapes"
        onMouseMove={(event) => getCursor(event)}
      >
        <Traingle
          className="shape"
          style={{
            left: "10%",
            top: "10%",
            transform: `translate(${cursorPostion.x}px, ${cursorPostion.y}px)`,
          }}
        />
        <Traingle
          className="shape"
          style={{
            left: "90%",
            top: "20%",
            transform: `translate(${cursorPostion.x}px, ${cursorPostion.y}px)`,
          }}
        />
        <Traingle
          className="shape"
          style={{
            left: "65%",
            top: "60%",
            transform: `translate(${cursorPostion.x}px, ${cursorPostion.y}px)`,
          }}
        />
        <Line
          className="shape"
          style={{
            left: "10%",
            top: "60%",
            transform: `translate(${cursorPostion.x}px, ${cursorPostion.y}px)`,
          }}
        />
        <Line
          className="shape"
          style={{
            left: "35%",
            top: "15%",
            transform: `translate(${cursorPostion.x}px, ${cursorPostion.y}px)`,
          }}
        />
        <Line
          className="shape"
          style={{
            left: "85%",
            top: "75%",
            transform: `translate(${cursorPostion.x}px, ${cursorPostion.y}px)`,
          }}
        />
        <SemiCircle
          className="shape"
          style={{
            left: "20%",
            top: "30%",
            transform: `translate(${cursorPostion.x}px, ${cursorPostion.y}px)`,
          }}
        />
        <SemiCircle
          className="shape"
          style={{
            left: "75%",
            top: "10%",
            transform: `translate(${cursorPostion.x}px, ${cursorPostion.y}px)`,
          }}
        />
        <SemiCircle
          className="shape "
          style={{
            left: "60%",
            top: "90%",
            transform: `translate(${cursorPostion.x}px, ${cursorPostion.y}px)`,
          }}
        />
        <TwoSemiCricle
          className="shape"
          style={{
            left: "20%",
            top: "85%",
            transform: `translate(${cursorPostion.x}px, ${cursorPostion.y}px)`,
          }}
        />
        <TwoSemiCricle
          className="shape"
          style={{
            left: "30%",
            top: "50%",
            transform: `translate(${cursorPostion.x}px, ${cursorPostion.y}px)`,
          }}
        />
        <TwoSemiCricle
          className="shape"
          style={{
            left: "75%",
            top: "40%",
            transform: `translate(${cursorPostion.x}px, ${cursorPostion.y}px)`,
          }}
        />
      </div>
    </div>
  );
}

export default SocialHandle;
//rgb(255, 209, 92);
//rgb(108, 108, 229);
//rgb(68, 215, 182);
//rgb(255, 76, 96);
