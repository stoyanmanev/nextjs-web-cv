import { Col } from "react-bootstrap";
import { faReact, faNode, faJsSquare, faJava, faVuejs, faAngular } from "@fortawesome/free-brands-svg-icons";
import { faHeart, faClock, faStar, faDiagramProject, faHandPointUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fact } from "../../generated/graphql";

interface Props {
  facts: Fact[];
}

const AboutMeList: React.FC<Props> = ({ facts }) => {

    const iconMapping: any = {
        "Java":             faJava,
        "React":            faReact,
        "NodeJs":           faNode,
        "Javascript":       faJsSquare,
        "Typescript":       faJsSquare,
        "Vue":              faVuejs,
        "Angular":          faAngular,
        "Awards Won":       faStar,
        "Happy Clients":    faHeart,
        "Working Hours":    faClock,
        "Another Projects": faDiagramProject,
        "Default":          faHandPointUp
    }

  return (
    <>
      {facts.map((fact, i) => {
        return (
          <Col key={i} xs={12} sm={4}>
            <div className="fun-fact gray-default">
              {iconMapping[fact.name] && 
              <FontAwesomeIcon icon={iconMapping[fact.name] ? iconMapping[fact.name] : iconMapping["Default"]} />
              }
              <h4>{fact.name}</h4>
              {fact.value && <span className="fun-fact-block-value">{fact.value}</span>}
              <span className="fun-fact-block-text"></span>
            </div>
          </Col>
        );
      })}
    </>
  );
};

export default AboutMeList;
