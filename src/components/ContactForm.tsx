import { ReactElement } from "react";
import "./styles/contact_form.css";

const ContactForm: React.FC = (): ReactElement => {
  return (
    <section className="contact-form--container">
      <form>
        <div className="input-container">
          <input type="text" name="name" id="name" placeholder="" required />
          <label htmlFor="name">Full Name</label>
        </div>
        <div className="input-container">
          <input type="text" name="email" id="email" placeholder="" required />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-container">
          <input type="text" name="phone" id="phone" placeholder="" />
          <label htmlFor="phone">Phone Number (optional)</label>
        </div>

        <textarea
          name="message"
          id="message"
          cols={30}
          rows={10}
          placeholder="Please be as descriptive as possible when stating the job required"
        ></textarea>

        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default ContactForm;
