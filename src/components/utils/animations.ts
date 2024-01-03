import gsap from "gsap";

type ShowContact = (contact: Element) => GSAPTimeline | undefined;

export const showContact: ShowContact = (contact) => {
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
      },
      {
        autoAlpha: 1,
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
    );
};

type ShowServices = (services: Element) => GSAPTimeline | undefined;

export const showServices: ShowServices = (services) => {
  if (!services) return;
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
      { autoAlpha: 0, stagger: 0.15 },
      {
        autoAlpha: 1,
        stagger: 0.15,
      }
    );
};
