import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { User } from "../../generated/graphql";

interface Props {
  user: User;
}

const HomeSectionContainer: React.FC<Props> = ({ user }) => {
  return (
    <div data-id="home" className="animated-section section-active">
      <div className="section-content vcentered">
        <Container>
          <Row>
            <Col>
              <div className="title-block">
                <h2>{user.fullname}</h2>
                <h4>{user.position}</h4>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomeSectionContainer;
