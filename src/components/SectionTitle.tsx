import { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, faHammer } from "@fortawesome/free-solid-svg-icons";
import "./styles/section_title.css";

type Props = (props: { title: string; subTitle: string; icon: IconDefinition }) => ReactElement;

const SectionTitle: Props = ({ title, subTitle, icon }) => {
  return (
    <div className="section-title section-title--container">
      <FontAwesomeIcon className="section-title--icon" icon={icon} />
      <h2>{title}</h2>
      <p className="section-title--sub">{subTitle}</p>
    </div>
  );
};

export default SectionTitle;
