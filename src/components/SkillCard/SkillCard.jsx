import "./SkillCard.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SkillCard = ({
  index,
  icon,
  title,
  description,
  languages,
  frameworks,
}) => {
  return (
    <div
      className="skill-card"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay={index * 250}
    >
      <div className="icon-container">
        <FontAwesomeIcon className="icon" icon={icon} />
      </div>

      <div>
        <h3>{title}</h3>
        <p className="description">{description}</p>
      </div>

      <div>
        <h4>Languages</h4>
        <p>{languages}</p>
      </div>

      <div>
        <h4>Frameworks/Tools</h4>
        <p>{frameworks}</p>
      </div>
    </div>
  );
};

export default SkillCard;
