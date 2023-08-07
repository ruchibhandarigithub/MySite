import "./ProjectPreview.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const ProjectPreview = ({ index, url, imgSrc, description }) => {
  return (
    <a
      href={url}
      target="_blank"
      className="project-preview"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay={index * 250}
    >
      <img src={imgSrc} />

      <span>
        <FontAwesomeIcon className="icon" icon={faArrowUpRightFromSquare} />
        {description}
      </span>
    </a>
  );
};

export default ProjectPreview;
