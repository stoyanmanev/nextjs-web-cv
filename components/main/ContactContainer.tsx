import {
  faEnvelope,
  faLocationDot,
  faPhone,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col } from "react-bootstrap";
import { User } from "../../interfaces/User";
import ContactForm from "./ContactForm";

interface Props {
  user: User;
}

const ContactContainer: React.FC<Props> = ({ user }) => {
  return (
    <div data-id="contact" className="animated-section section-active">
      <Row>
        <Col lg={12}>
          <div className="page-title">
            <h2>Contact</h2>
          </div>
        </Col>
        <Col xs={12} sm={4}>
          {user.address && (
            <div className="lm-info-block gray-default">
              <FontAwesomeIcon icon={faLocationDot} />
              <h4>{user.address}</h4>
              <span className="lm-info-block-value"></span>
              <span className="lm-info-block-text"></span>
            </div>
          )}

          {user.phone && (
            <div className="lm-info-block gray-default">
              <FontAwesomeIcon icon={faPhone} />
              <h4>
                <a
                  title={`phone call to ${user.fullname}`}
                  href={`tel:${user.phone}`}
                >
                  {user.phone}
                </a>
              </h4>
              <span className="lm-info-block-value"></span>
              <span className="lm-info-block-text"></span>
            </div>
          )}

          <div className="lm-info-block gray-default">
            <FontAwesomeIcon icon={faEnvelope} />
            <h4>
              <a
                title={`send e-mail to ${user.fullname}`}
                href={`mailto:${user.eMail}`}
              >
                {user.eMail}
              </a>
            </h4>
            <span className="lm-info-block-value"></span>
            <span className="lm-info-block-text"></span>
          </div>
        </Col>
        <Col xs={12} sm={8}>
          {user.googleIframe && (
            <div id="map" className="map">
              <div className="lmpixels-map">
                <iframe src={user.googleIframe}></iframe>
              </div>
            </div>
          )}
          {user.form && <ContactForm />}
        </Col>
      </Row>
    </div>
  );
};

export default ContactContainer;
