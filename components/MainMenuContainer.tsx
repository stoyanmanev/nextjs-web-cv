import {
  faBook,
  faEnvelope,
  faGear,
  faGraduationCap,
  faHouseChimneyWindow,
  faSuitcase,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Container } from "react-bootstrap";
import Link from "next/link";

const MainMenuContainer: React.FC = () => {
  return (
    <Navbar variant="dark">
      <Container>
        <div className="me-auto main-menu">
          <Link href="/">
            <div className="link">
              <FontAwesomeIcon
                icon={faHouseChimneyWindow}
                className="menu-icon lnr lnr-home"
              />
              <span className="link-text">Home</span>
            </div>
          </Link>
          <Link href="/about-me">
            <div className="link">
              <FontAwesomeIcon
                icon={faUser}
                className="menu-icon lnr lnr-user"
              />
              <span className="link-text">About Me</span>
            </div>
          </Link>
          <Link href="/resume">
            <div className="link">
              <FontAwesomeIcon
                icon={faGraduationCap}
                className="menu-icon lnr lnr-graduation-hat"
              />
              <span className="link-text">Resume</span>
            </div>
          </Link>
          <Link href="/portfolio">
            <div className="link">
              <FontAwesomeIcon
                icon={faBook}
                className="menu-icon lnr lnr-book"
              />
              <span className="link-text">Portfolio</span>
            </div>
          </Link>
          <Link href="/blog">
            <div className="link">
              <FontAwesomeIcon
                icon={faSuitcase}
                className="menu-icon lnr lnr-book"
              />
              <span className="link-text">Blog</span>
            </div>
          </Link>
          <Link href="/contact">
            <div className="link">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="menu-icon lnr lnr-envelope"
              />
              <span className="link-text">Contact</span>
            </div>
          </Link>
          <Link href="/settings">
            <div className="link">
              <FontAwesomeIcon
                icon={faGear}
                className="menu-icon lnr lnr-settings"
              />
              <span className="link-text">Settings</span>
            </div>
          </Link>
        </div>
      </Container>
    </Navbar>
  );
};

export default MainMenuContainer;
