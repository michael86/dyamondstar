import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import {
  faHammer,
  faPhone,
  faScrewdriver,
} from "@fortawesome/free-solid-svg-icons";
import "./styles/header.css";

const HeaderCTA: React.FC = (): ReactElement => {
  const { width } = useWindowSize();

  return (
    <ul className="header--cta">
      <li tabIndex={1} aria->
        <span className="cta--icon">
          <FontAwesomeIcon icon={faHammer} />
        </span>
        Book Online
      </li>
      <li tabIndex={2}>
        <span className="cta--icon">
          <FontAwesomeIcon icon={faScrewdriver} />
        </span>
        Request Estimate
      </li>
      <li tabIndex={3}>
        <span className="cta--icon">
          <FontAwesomeIcon icon={faPhone} />
        </span>
        Emergency Service: &#91;0800123467&#93;
      </li>
    </ul>
  );
};

export default HeaderCTA;
