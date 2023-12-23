import gsap from "gsap";

export const showHeroSlider = (
  contact: Element,
  buttons: Element[]
): GSAPTimeline | null => {
  if (!contact) return null;

  const tl = gsap
    .timeline({ paused: true, delay: 0.5 })
    .fromTo(
      contact,
      {
        autoAlpha: 0,
        scale: 0,
      },
      {
        autoAlpha: 1,
        scale: 1,
      }
    )
    .fromTo(
      buttons,
      { autoAlpha: 0, scale: 0, stagger: 0.2 },
      {
        autoAlpha: 1,
        scale: 1,
        stagger: 0.2,
      }
    );
  return tl;
};

export const showContactSlide = (
  contact: Element,
  paused: boolean = true
): GSAPTimeline | null => {
  if (!contact) return null;

  return gsap
    .timeline({ paused })
    .fromTo(
      contact.children[0],
      {
        y: -20,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
      }
    )
    .fromTo(
      contact.children[1],
      {
        x: 200,
        autoAlpha: 0,
      },
      {
        x: 0,
        autoAlpha: 1,
      }
    )
    .fromTo(
      contact.children[2],
      {
        y: 200,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        onComplete: function () {
          gsap.set(this.targets(), { clearProps: "all" });
        },
      }
    );
};

export const showServiceSlide = (service: Element): GSAPTimeline | null => {
  return null;
};
