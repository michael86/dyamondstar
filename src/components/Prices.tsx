import { FC, ReactElement } from "react";
import SectionTitle from "./SectionTitle";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";

const Prices: FC = (): ReactElement => {
  return (
    <>
      <SectionTitle title={"Our Prices"} icon={faMoneyBill} margin={3} light={false} />;
      <p>
        rem tenetur placeat dolorum numquam distinctio dolore, aliquid dicta et a cupiditate
        praesentium ut beatae soluta.
      </p>
    </>
  );

  //   https://codepen.io/tedmcdo/pen/PqxKXg
};

export default Prices;
