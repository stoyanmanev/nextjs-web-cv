import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Abilities } from "../../interfaces/Abilities";
import { PersonalPath } from "../../interfaces/PersonalPath";
import ResumeKnowledges from "./ResumeKnowledges";
import ResumePathList from "./ResumePathList";
import ResumeSkillsList from "./ResumeSkillsList";

interface Props {
  paths?: PersonalPath[];
  abilities?: Abilities;
}

const ResumeSectionContainer: React.FC<Props> = ({ paths, abilities }) => {
  return (
    <div data-id="resume" className="animated-section section-active">
      <div className="page-title">
        <h2>Resume</h2>
      </div>
      <Container className="section-content">
        <Row>
          {paths && paths.length > 0 && (
            <Col xs={12} sm={7}>
              <ResumePathList paths={paths} />
            </Col>
          )}
          {abilities && Object.entries(abilities).length > 0 && (
            <Col xs={12} sm={5}>
              <div className="design-skills-container">
                {abilities.skills && abilities.skills.length > 0 && <ResumeSkillsList skills={abilities.skills} />}
                {abilities.knowledges && abilities.knowledges.length > 0 && <ResumeKnowledges knowledges={abilities.knowledges} />}
              </div>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default ResumeSectionContainer;
