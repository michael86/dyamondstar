import { IconDefinition, IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement } from "react";

type Type = (props: { icon: IconDefinition }) => ReactElement;

const SuccessRateTitle: Type = ({ icon }) => {
  return (
    <div className="success-rate--icon">
      <FontAwesomeIcon icon={icon} />
    </div>
  );
};

export default SuccessRateTitle;
