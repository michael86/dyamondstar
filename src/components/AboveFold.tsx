import "./styles/above_fold.css";
import { ReactElement, useLayoutEffect, useRef } from "react";

import { useGSAP } from "@gsap/react";
import { showContact, showServices } from "./utils/animations";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPepperHot,
  faHammer,
  faBathtub,
  faMugSaucer,
  faCaravan,
  faPaintRoller,
  faShip,
} from "@fortawesome/free-solid-svg-icons";

const AboveFold: React.FC = (): ReactElement => {
  const contactContainer = useRef<HTMLDivElement | null>(null);
  const serviceContainer = useRef<HTMLDivElement | null>(null);
  const showContactTL = useRef<GSAPTimeline | undefined>();
  const showServiceTL = useRef<GSAPTimeline | undefined>();
  let activeSlide = useRef<0 | 1>(0);

  useGSAP(async () => {
    if (!serviceContainer.current || !contactContainer.current) return;

    showContactTL.current = showContact(contactContainer.current);
    showServiceTL.current = showServices(serviceContainer.current);
    await showContactTL.current?.play();
  });

  useLayoutEffect(() => {
    const playSibling = (timer: number = 2000) => {
      setTimeout(() => {
        activeSlide.current === 0
          ? showServiceTL.current?.play()
          : showContactTL.current?.play();

        activeSlide.current = activeSlide.current === 0 ? 1 : 0;
      }, timer);
    };

    const switchSlide = async () => {
      if (activeSlide.current === 0) {
        showContactTL.current?.reverse();
        playSibling();
      } else {
        showServiceTL.current?.reverse();
        setTimeout(() => {
          showContactTL.current?.play();
          playSibling(1900);
        }, 1900);
      }
    };

    setInterval(switchSlide, 15 * 1000);
  }, []);

  return (
    <div className="fold">
      <div className="site-title__container">
        <img
          className="site-title__image"
          src="./images/dyamond_star_logo.png"
          alt="company logo"
        />
        <h2 className="site-title__header">
          Dyamond <span>Star</span>
        </h2>
      </div>

      <div className="hero-slider">
        <div className="hero-slider__img-container">
          <div
            className="hero-slider__img hero-slider__contact"
            ref={contactContainer}
          >
            <h2>Free Estimates</h2>
            <p>Contact us today for a free no obligation quote</p>
            <button>Contact</button>
            <img
              src="./images/hero_contact_background.webp"
              alt="hero contact background"
            />
          </div>

          <div
            className="hero-slider__img hero-slider__services"
            ref={serviceContainer}
          >
            <h2>Services</h2>
            <img
              src="https://st.depositphotos.com/1031174/2234/i/450/depositphotos_22345609-stock-photo-work-tools.jpg"
              alt="hero services background"
            />
            <div className="container">
              <div className="end service">
                <FontAwesomeIcon icon={faPepperHot} />
                <h3>Gardening</h3>
              </div>

              <div className="service start">
                <FontAwesomeIcon icon={faHammer} />
                <h3>Carpentry</h3>
              </div>

              <div className="end service">
                <FontAwesomeIcon icon={faBathtub} />
                <h3>Bathrooms</h3>
              </div>

              <div className="end service">
                <FontAwesomeIcon icon={faMugSaucer} />
                <h3>Kitchens</h3>
              </div>

              <div className="service start">
                <FontAwesomeIcon icon={faShip} />
                <h3>Boats</h3>
              </div>

              <div className="end service">
                <FontAwesomeIcon icon={faCaravan} />
                <h3>Caravans</h3>
              </div>

              <div className="service start">
                <FontAwesomeIcon icon={faPaintRoller} />
                <h3>Decorating</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboveFold;
