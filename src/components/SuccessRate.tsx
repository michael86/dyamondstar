import { ReactElement } from "react";
import SectionTitle from "./SectionTitle";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./styles/success_rate.css";

const SuccessRate: React.FC = (): ReactElement => {
  return (
    <section className="success-rate">
      <SectionTitle
        title="Our Success Rate"
        subTitle="What We Have Done"
        icon={faCheck}
        light={true}
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam distinctio quae maiores
        asperiores praesentium fugit reiciendis facilis dolore id voluptatibus illo quis odio quod
        nihil excepturi, eligendi sint quos provident!
      </p>
    </section>
  );
};

export default SuccessRate;
