import { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import "./styles/section_title.css";

type Props = (props: {
  title: string;
  subTitle: string;
  icon: IconDefinition;
  margin?: number;
  light: boolean;
}) => ReactElement;

const SectionTitle: Props = ({ title, subTitle, icon, margin, light }) => {
  return (
    <div
      className="section-title section-title--container"
      style={{ margin: margin ? `${margin}rem auto` : "2rem auto" }}
    >
      <FontAwesomeIcon
        className="section-title--icon"
        icon={icon}
        style={{ background: light ? "#000" : "#fff", color: light ? "#fff" : "#000" }}
      />
      <h2 style={{ color: light ? "#fff" : "#000" }}>{title}</h2>
      <p
        style={{ color: light ? "#fff" : "#000", backgroundColor: light ? "#000" : "#fff" }}
        className="section-title--sub"
      >
        {subTitle}
      </p>
    </div>
  );
};

export default SectionTitle;
