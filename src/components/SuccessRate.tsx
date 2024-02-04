import { ReactElement } from "react";
import SectionTitle from "./SectionTitle";
import {
  faCheck,
  faClipboardUser,
  faFaceSmile,
  faHammer,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import "./styles/success_rate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SuccessRateTitle from "./SuccessRateTitle";

const SuccessRate: React.FC = (): ReactElement => {
  return (
    <section className="success-rate">
      <SectionTitle
        title="Our Success Rate"
        subTitle="What We Have Done"
        icon={faCheck}
        light={true}
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam distinctio quae maiores
        asperiores praesentium fugit reiciendis facilis dolore id voluptatibus illo quis odio quod
        nihil excepturi, eligendi sint quos provident!
      </p>
      <div className="happy-customers--container">
        <SuccessRateTitle icon={faPeopleGroup} />
        <p>4126 +</p>
        <p>Happy Clients</p>
      </div>

      <div className="projects-completed--container">
        <SuccessRateTitle icon={faHammer} />
        <p>123 +</p>
        <p>Projects Completed</p>
      </div>

      <div className="average-rating--container">
        <SuccessRateTitle icon={faFaceSmile} />
        <p>123 +</p>
        <p>Projects Completed</p>
      </div>

      <div className="qualified-staff--container">
        <SuccessRateTitle icon={faClipboardUser} />
        <p>123 +</p>
        <p>Projects Completed</p>
      </div>
    </section>
  );
};

export default SuccessRate;
