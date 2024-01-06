import { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBathtub,
  faCaravan,
  faGlassWater,
  faHammer,
  faKitchenSet,
  faPaintRoller,
  faSailboat,
} from "@fortawesome/free-solid-svg-icons";
import "./styles/services.css";

const services = [
  {
    img: "cxci0",
    icon: faHammer,
    title: "carpentry",
    linkTo: "https://facebook.com",
  },
  {
    title: "gardening",
    img: "",
    icon: faGlassWater,
    linkTo: "https://facebook.com",
  },
  {
    title: "bathrooms",
    img: "",
    icon: faBathtub,
    linkTo: "https://facebook.com",
  },
  {
    title: "kitchens",
    img: "",
    icon: faKitchenSet,
    linkTo: "https://facebook.com",
  },
  { title: "boats", img: "", icon: faSailboat, linkTo: "https://facebook.com" },
  {
    title: "caravans",
    img: "",
    icon: faCaravan,
    linkTo: "https://facebook.com",
  },
  {
    title: "decorating",
    img: "",
    icon: faPaintRoller,
    linkTo: "https://facebook.com",
  },
];

const Services: React.FC = (): ReactElement => {
  return (
    <section className="services services--container">
      <div className="services-title services-title--container">
        <FontAwesomeIcon className="services-title--icon" icon={faHammer} />
        <h2>Our Services</h2>
        <p className="services-title--sub">What We Can Do</p>
      </div>
      <p className="services--sub-title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        molestias ipsam quia, consequatur expedita voluptates sit esse excepturi
        porro reprehenderit.
      </p>

      <div className="services--service-container">
        {services.map((service) => {
          return (
            <>
              <div className="services--service" key={service.title}>
                <FontAwesomeIcon icon={service.icon} />
                <h3>{service.title}</h3>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
