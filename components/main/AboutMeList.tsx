import { Facts } from "../../interfaces/Facts";
import { Col } from "react-bootstrap";
import { faReact, faNode, faJsSquare, faJava } from "@fortawesome/free-brands-svg-icons";
import { faHeart, faClock, faStar, faDiagramProject } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  facts: Facts[];
}

const AboutMeList: React.FC<Props> = ({ facts }) => {

    const iconMapping: any = {
        // "Java":             faJava,
        "React":            faReact,
        "NodeJs":           faNode,
        "Javascript":       faJsSquare,
        "Awards Won":       faStar,
        "Happy Clients":    faHeart,
        "Working Hours":    faClock,
        "Another Projects": faDiagramProject,
    }

  return (
    <>
      {facts.map((fact, i) => {
        return (
          <Col key={i} xs={12} sm={4}>
            <div className="fun-fact gray-default">
              {iconMapping[fact.name] && 
              <FontAwesomeIcon icon={iconMapping[fact.name] && iconMapping[fact.name]} />
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
