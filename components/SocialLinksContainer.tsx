import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { Social } from "../interfaces/Social";
import React from "react";

interface Props {
  social: Social;
}

const SocialLinksContainer: React.FC<Props> = ({ social }) => {
  return (
    <div className="social-links">
      <ul>
        {social?.linkenid && (
          <li>
            <a
              href={social.linkenid}
              target="_blank"
              rel="noreferrer"
              title="Follow me in LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
        )}
        {social?.facebook && (
          <li>
            <a
              href={social.facebook}
              target="_blank"
              rel="noreferrer"
              title="Follow me in Facebook"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
        )}
        {social?.twitter && (
          <li>
            <a
              href={social.twitter}
              target="_blank"
              rel="noreferrer"
              title="Follow me in Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
        )}
        {social?.github && (
          <li>
            <a href={social.github} target="_blank" rel="noreferrer" title="Follow me in GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default SocialLinksContainer;
