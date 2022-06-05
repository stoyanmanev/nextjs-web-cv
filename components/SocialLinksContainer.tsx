import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { User } from "../generated/graphql";

interface Props {
  user: User;
}

const SocialLinksContainer: React.FC<Props> = ({ user }) => {
  return (
    <div className="social-links">
      <ul>
        {user?.linkedin && (
          <li>
            <a
              href={user.linkedin}
              target="_blank"
              rel="noreferrer"
              title="Follow me in LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
        )}
        {user?.facebook && (
          <li>
            <a
              href={user.facebook}
              target="_blank"
              rel="noreferrer"
              title="Follow me in Facebook"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
        )}
        {user?.twitter && (
          <li>
            <a
              href={user.twitter}
              target="_blank"
              rel="noreferrer"
              title="Follow me in Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
        )}
        {user?.github && (
          <li>
            <a href={user.github} target="_blank" rel="noreferrer" title="Follow me in GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default SocialLinksContainer;
