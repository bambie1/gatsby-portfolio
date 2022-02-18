import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const linkStyle = `
px-4 py-2 border-2 rounded-full text-xl hover:text-gray transition duration-150 ease-in-out
`;

const SocialLinks = ({ row }) => {
  return (
    <div
      className={`flex ${row ? "" : "md:flex-col"} md:items-end ${
        row ? "mt-8" : "md:justify-center"
      } mt-10 gap-4 md:mt-0`}
    >
      <a
        href="https://www.linkedin.com/in/benaiah-ambie-barango/"
        target="_blank"
        rel="noreferrer"
        className={linkStyle}
      >
        <span className="sr-only">LinkedIn</span>
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a
        href="https://github.com/bambie1"
        target="_blank"
        rel="noreferrer"
        className={linkStyle}
      >
        <span className="sr-only">Github</span>
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://twitter.com/BenaiahBarango"
        target="_blank"
        rel="noreferrer"
        className={linkStyle}
      >
        <span className="sr-only">Twitter</span>
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </div>
  );
};

export default SocialLinks;
