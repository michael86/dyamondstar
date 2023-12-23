import { ReactElement, useRef } from "react";
import "./styles/above_fold.css";
import { useGSAP } from "@gsap/react";
import {
  showHeroSlider,
  showContactSlide,
  showServiceSlide,
} from "./utils/animations";

const AboveFold: React.FC = (): ReactElement => {
  const ref = useRef<HTMLDivElement | null>(null);
  const showSliderTl = useRef<GSAPTimeline | null>(null);
  const contactSlideTl = useRef<GSAPTimeline | null>(null);
  const serviceSlideTl = useRef<GSAPTimeline | null>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const imgContainer = ref.current.children[0];
      const btnContainer = ref.current.children[1];
      const images = imgContainer.children;
      const contact = images[0];
      const services = images[1];

      showSliderTl.current = showHeroSlider(
        contact,
        Array.from(btnContainer.children)
      );

      // gsap.set(services, { display: "none" });
      contactSlideTl.current = showContactSlide(contact);
      serviceSlideTl.current = showServiceSlide(services);

      if (showSliderTl.current && contactSlideTl.current) {
        showSliderTl.current.add(contactSlideTl.current.play());
        showSliderTl.current.play();
      }
    },
    { scope: ref }
  );
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

      <div className="hero-slider" ref={ref}>
        <div className="hero-slider__img-container">
          <div className="hero-slider__img hero-slider__contact">
            <h2>Free Estimates</h2>
            <p>Contact us today for a free no obligation quote</p>
            <button>Contact</button>
            <img
              src="./images/hero_contact_background.webp"
              alt="hero contact background"
            />
          </div>
          <div className="hero-slider__img hero-slider__services">
            <div className="hero-slider__fade hero-slider__contact"></div>
            <img
              src="./images/hero_services_background.jpg"
              alt="hero services background"
            />
          </div>
        </div>
        <div className="hero-slider__buttons">
          <div className="hero-slider__button"></div>
          <div className="hero-slider__button"></div>
        </div>
      </div>
    </div>
  );
};

export default AboveFold;
