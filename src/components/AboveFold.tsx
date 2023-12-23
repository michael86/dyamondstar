import { ReactElement, useLayoutEffect, useRef, useState } from "react";
import "./styles/above_fold.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { showHeroSlider, showContactSlide, showServiceSlide } from "./utils/animations";
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
  const ref = useRef<HTMLDivElement | null>(null);
  const [activeSlide, setActiveSlide] = useState<0 | 1>(0);
  const showSliderTl = useRef<GSAPTimeline | null>(null);
  const contactSlideTl = useRef<GSAPTimeline | null>(null);
  const serviceSlideTl = useRef<GSAPTimeline | null>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const slidesContainer = ref.current.children[0];
      const btnContainer = ref.current.children[1];
      const images = slidesContainer.children;
      const contactContainer = images[0];
      const servicesContainer = images[1];

      showSliderTl.current = showHeroSlider(contactContainer, Array.from(btnContainer.children));

      gsap.set(servicesContainer, { display: "none" });
      contactSlideTl.current = showContactSlide(contactContainer);
      serviceSlideTl.current = showServiceSlide(servicesContainer);

      if (showSliderTl.current && contactSlideTl.current) {
        showSliderTl.current
          .play()
          .then(() => contactSlideTl.current && contactSlideTl.current.play());
      }
    },
    { scope: ref }
  );

  //Need to refactor refs to each container, be easier than breaking into nested children.
  // Also refactor animations to show/hide each container once animation complete.
  useLayoutEffect(() => {
    if (!serviceSlideTl.current || !contactSlideTl.current) return;

    const switchSlide = async () => {
      if (activeSlide === 0) {
        console.log("contact");
        await contactSlideTl.current!.reverse(0);
      } else {
        console.log("service");
        serviceSlideTl.current!.reverse();
      }
      // activeSlide === 0 ? contactSlideTl.current.reverse(0) : serviceSlideTl.current.reverse(0);
    };

    setInterval(switchSlide, 10 * 1000);
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

      <div className="hero-slider" ref={ref}>
        <div className="hero-slider__img-container">
          <div className="hero-slider__img hero-slider__contact">
            <h2>Free Estimates</h2>
            <p>Contact us today for a free no obligation quote</p>
            <button>Contact</button>
            <img src="./images/hero_contact_background.webp" alt="hero contact background" />
          </div>

          <div className="hero-slider__img hero-slider__services">
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
        <div className="hero-slider__buttons">
          <div className="hero-slider__button"></div>
          <div className="hero-slider__button"></div>
        </div>
      </div>
    </div>
  );
};

export default AboveFold;
