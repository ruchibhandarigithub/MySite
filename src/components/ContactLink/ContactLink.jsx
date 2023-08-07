import "./ContactLink.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactLink = ({ url, icon }) => {
  return (
    <a href={url} target="_blank" className="contact-link">
      <FontAwesomeIcon className="icon" icon={icon} />
    </a>
  );
};

export default ContactLink;
