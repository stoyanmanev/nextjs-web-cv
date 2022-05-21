import { Col } from "react-bootstrap";
import { PersonalPath } from "../../interfaces/PersonalPath";
import ResumePeaceList from "./ResumePeaceList";

interface Props {
    paths: PersonalPath[];
}

const ResumePathList: React.FC<Props> = ({ paths }) => {

  return (
    <>
      {paths.map((path, i) => {
        return (
            <div key={i} className="info">
            <div className="block-title">
              {path.headline && <h3>{path.headline}</h3>}
            </div>
            {path.pieces.length > 0 && (
              <ResumePeaceList pieces={path.pieces} />
            )}
          </div>
        );
      })}
    </>
  );
};

export default ResumePathList;
