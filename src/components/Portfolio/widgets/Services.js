import React from "react";
import { useIntl } from "react-intl";
import Card from "../../common/Card";
import { information } from "../../../constant/information";
import "../portfolio.scss";

function Services() {
  const intl = useIntl();
  return (
    <div className="services">
      <div className="cm-title mb40">{intl.messages["section.services"]}</div>
      <div className="flex justifySpaceBetween">
        {information.services.map((data, index) => (
          <Card
            title={data.name}
            description={data.description}
            icon={data.icon}
            style={{
              background: data.color,
              boxShadow: `${data.shadowColor} 0px 5px 20px 0px`,
              marginLeft: index !== 0 && '25px'
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
