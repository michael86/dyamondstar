import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume, faPhone, faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { ReactElement } from "react";
import "./styles/contact.css";

const Contact: React.FC = (): ReactElement => {
  return (
    <section className="contact contact--container">
      <h2 className="contact--title">One call can solve all your problems</h2>
      <FontAwesomeIcon className="contact--icon" icon={faPhoneVolume} />
      <a className="contact--link" href="tel:012685551234">
        <FontAwesomeIcon className="icon" icon={faPhone} />
        01268-555-1234
      </a>
      <a className="contact--link" href="mailto:em@gmail.com">
        <FontAwesomeIcon className="icon" icon={faEnvelopeOpen} />
        em@gmail.com
      </a>
      <a className="contact--link" href="mailto:lew@gmail.com">
        <FontAwesomeIcon className="icon" icon={faEnvelopeOpen} />
        lew@gmail.com
      </a>
    </section>
  );
};

export default Contact;
