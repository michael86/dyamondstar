import { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHammer } from "@fortawesome/free-solid-svg-icons";
import "./styles/services.css";

const Services: React.FC = (): ReactElement => {
  return (
    <section className="services services--container">
      <div className="services-title services-title--container">
        <FontAwesomeIcon className="services-title--icon" icon={faHammer} />
        <h2>Our Services</h2>
        <p className="services-title--sub">What We Can Do</p>
      </div>
    </section>
  );
};

export default Services;
