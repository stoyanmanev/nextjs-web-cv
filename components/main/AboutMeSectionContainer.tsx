import { faHeart, faClock, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { User } from "../../interfaces/User";
import AboutMeList from "./AboutMeList";

interface Props {
  user: User;
}

const AboutMeSectionContainer: React.FC<Props> = ({ user }) => {
  return (
    <div data-id="about-me" className="animated-section section-active">
      <div className="page-title">
        <h2>
          About <span>Me</span>
        </h2>
      </div>
      <Container className="section-content">
        <Row>
          {user?.description && (
            <Col xs={12} sm={7}>
              <p>{user.description}</p>
            </Col>
          )}
          <Col xs={12} sm={5}>
            <div className="info-list">
              <ul>
                {user?.age && (
                  <li>
                    <span className="title">Age</span>
                    <span className="value">{user.age}</span>
                  </li>
                )}
                {user?.residence && (
                  <li>
                    <span className="title">Residence</span>
                    <span className="value">{user.residence}</span>
                  </li>
                )}
                {user?.address && (
                  <li>
                    <span className="title">Address</span>
                    <span className="value"> {user.address}</span>
                  </li>
                )}
                {user.eMail && (
                  <li>
                    <span className="title">e-mail</span>
                    <span className="value">
                      <a
                        title={`send e-mail to ${user.fullname}`}
                        href={`mailto:${user.eMail}`}
                      >
                        {user.eMail}
                      </a>
                    </span>
                  </li>
                )}
                {user.phone && (
                  <li>
                    <span className="title">Phone</span>
                    <span className="value">
                      <a
                        title={`phone call to ${user.fullname}`}
                        href={`tel:${user.phone}`}
                      >
                        {user.phone}
                      </a>
                    </span>
                  </li>
                )}
              </ul>
            </div>
          </Col>
        </Row>
        {user.facts && user.facts.length > 0 && <Row>
        <Col xs={12} sm={12}>
            <div className="block-title">
              <h3>
                Fun <span>Facts</span>
              </h3>
            </div>
          </Col>
          <AboutMeList facts={user.facts}/>
        </Row>}
      </Container>
    </div>
  );
};

export default AboutMeSectionContainer;
