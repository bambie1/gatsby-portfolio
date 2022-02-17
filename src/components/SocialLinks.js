import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const linkStyle = `
px-4 py-2 border-2 rounded-full text-xl hover:text-gray
`;

const SocialLinks = () => {
  return (
    <div className="flex md:flex-col md:items-end md:justify-center gap-4 mt-10 md:mt-0">
      <a
        href="https://www.linkedin.com/in/benaiah-ambie-barango/"
        target="_blank"
        rel="noreferrer"
        className={linkStyle}
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a
        href="https://github.com/bambie1"
        target="_blank"
        rel="noreferrer"
        className={linkStyle}
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://twitter.com/BenaiahBarango"
        target="_blank"
        rel="noreferrer"
        className={linkStyle}
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </div>
  );
};

export default SocialLinks;
