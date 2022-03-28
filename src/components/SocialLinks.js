import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const linkStyle = `
px-4 py-2 border border-gray-600 dark:border-gray-200 hover:dark:border-gray-600 hover:dark:text-gray-600 rounded-full text-xl hover:text-gray-600 hover:border-gray-600 transition duration-150 ease-in-out
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
        <FontAwesomeIcon
          icon={faLinkedinIn}
          className="text-gray-600 dark:text-gray-200"
        />
      </a>
      <a
        href="https://github.com/bambie1"
        target="_blank"
        rel="noreferrer"
        className={linkStyle}
      >
        <span className="sr-only">Github</span>
        <FontAwesomeIcon
          icon={faGithub}
          className="text-gray-600 dark:text-gray-200"
        />
      </a>
      <a
        href="https://twitter.com/BenaiahBarango"
        target="_blank"
        rel="noreferrer"
        className={linkStyle}
      >
        <span className="sr-only">Twitter</span>
        <FontAwesomeIcon
          icon={faTwitter}
          className="text-gray-600 dark:text-gray-200"
        />
      </a>
    </div>
  );
};

export default SocialLinks;
