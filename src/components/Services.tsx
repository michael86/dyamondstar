import { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  faBathtub,
  faCaravan,
  faGlassWater,
  faHammer,
  faKitchenSet,
  faPaintRoller,
  faSailboat,
} from "@fortawesome/free-solid-svg-icons";
import "./styles/services.css";
import SectionTitle from "./SectionTitle";

type Services = {
  title: string;
  img: string;
  alt: string;
  icon: IconDefinition;
  linkTo: string;
}[];

const services: Services = [
  {
    title: "carpentry",
    img: "./images/service_carpentry.jpg",
    alt: "carpentry service",
    icon: faHammer,
    linkTo: "https://facebook.com",
  },
  {
    title: "gardening",
    img: "./images/service_gardening.jpg",
    alt: "gardening service",
    icon: faGlassWater,
    linkTo: "https://facebook.com",
  },
  {
    title: "bathrooms",
    img: "./images/service_bathroom.jpg",
    alt: "bathroom service",
    icon: faBathtub,
    linkTo: "https://facebook.com",
  },
  {
    title: "kitchens",
    img: "./images/service_kitchen.jpg",
    alt: "kitchen service",
    icon: faKitchenSet,
    linkTo: "https://facebook.com",
  },
  {
    title: "boats",
    img: "./images/service_boats.jpg",
    alt: "boats service",
    icon: faSailboat,
    linkTo: "https://facebook.com",
  },
  {
    title: "caravans",
    img: "./images/service_caravan.jpg",
    alt: "caravans service",
    icon: faCaravan,
    linkTo: "https://facebook.com",
  },
  {
    title: "decorating",
    img: "./images/service_painting.webp",
    alt: "decorating service",
    icon: faPaintRoller,
    linkTo: "https://facebook.com",
  },
];

const Services: React.FC = (): ReactElement => {
  return (
    <section className="services services--container">
      <SectionTitle title={"Our Services"} subTitle="What We Can Do" icon={faHammer} />

      <p className="services--info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae molestias ipsam quia,
        consequatur expedita voluptates sit esse excepturi porro reprehenderit.
      </p>

      <div className="services--service-container">
        {services.map((service) => {
          return (
            <>
              <div
                className="services--service"
                key={service.title}
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.1), rgba(0,0,0, 0.73)), url(${service.img})`,
                }}
              >
                <div>
                  <FontAwesomeIcon className="icon" icon={service.icon} />
                  <h3>{service.title}</h3>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
