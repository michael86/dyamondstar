import gsap from "gsap";

type ShowContact = (
  contact: Element,
  buttons: Element[]
) => GSAPTimeline | undefined;

export const showContact: ShowContact = (contact, buttons) => {
  if (!contact) return;

  return gsap
    .timeline({
      delay: 0.5,
      onStart: function () {
        gsap.set(contact, { display: "flex" });
      },
      onReverseComplete: function () {
        gsap.set(contact, { display: "none" });
      },
    })

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
    )
    .to(buttons[0], { backgroundColor: "#000" });
};

type ShowServices = (
  services: Element,
  buttons: Element[]
) => GSAPTimeline | undefined;

export const showServices: ShowServices = (services, buttons) => {
  if (!services || !buttons) return;
  const serviceIcons = services.children[2];
  return gsap
    .timeline({
      paused: true,
      delay: 0.5,
      onStart: function () {
        gsap.set(services, { display: "flex" });
      },
      onReverseComplete: function () {
        gsap.set(services, { display: "none" });
      },
    })
    .fromTo(services, { autoAlpha: 0 }, { autoAlpha: 1 })
    .fromTo(
      serviceIcons.children,
      { scale: 0, autoAlpha: 0, stagger: 0.1 },
      { scale: 1.2, autoAlpha: 0.5, stagger: 0.1 }
    )
    .to(serviceIcons.children, { scale: 1, autoAlpha: 1 });
};
