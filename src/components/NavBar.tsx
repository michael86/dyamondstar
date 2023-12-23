import { ReactElement, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { useWindowSize } from "@uidotdev/usehooks";

const NavBar: React.FC = (): ReactElement => {
  const { width } = useWindowSize();
  const [shown, setShown] = useState<boolean>(false);

  const ref = useRef<HTMLUListElement>(null);
  const tl = useRef<GSAPTimeline | null>(null);

  useGSAP(() => {
    if (!ref.current) return;

    const _tl = gsap
      .timeline({ paused: true })
      .fromTo(ref.current, { height: 0, x: 500 }, { height: "auto", x: 0 })
      .fromTo(
        ref.current.children,
        { autoAlpha: 0, stagger: 0.2 },
        { autoAlpha: 1, stagger: 0.2 }
      );

    tl.current = _tl;
  });

  const onShow = (show: boolean) => {
    if (!tl.current) return;
    !show ? tl.current.play() : tl.current.reverse();
    setShown(!shown);
  };

  return (
    <nav className={width && width <= 991 ? "sticky--menu" : ""}>
      <h1>Dyamond Star LTD</h1>
      <div
        className="hamburger"
        tabIndex={4}
        onKeyUp={(e) => e.key === "Enter" && onShow(shown)}
        onClick={() => onShow(shown)}
      >
        <span className="hamburger--line"></span>
        <span className="hamburger--line"></span>
        <span className="hamburger--line"></span>
      </div>

      <ul className="main-menu" ref={ref}>
        <li>Contact</li>
        <li>Request Estimate</li>
        <li>Book Online</li>
        <li>Gallery</li>
        <li>About</li>
      </ul>
    </nav>
  );
};

export default NavBar;
