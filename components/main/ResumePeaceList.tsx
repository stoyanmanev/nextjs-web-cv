import { Col } from "react-bootstrap";
import { Piece } from "../../generated/graphql";

interface Props {
  pieces: Piece[];
}

const ResumePathList: React.FC<Props> = ({ pieces }) => {
  return (
    <>
      {pieces.length > 0 && (
        <div className="timeline timeline-second-style clearfix">
          {pieces.map((piece, i) => {
            return (
              <div key={i} className="timeline-item clearfix">
                <div className="left-part">
                  {piece.year && <h5 className="item-period">{piece.year}</h5>}
                  {piece.location && (
                    <span className="item-company">{piece.location}</span>
                  )}
                </div>
                <div className="divider"></div>
                <div className="right-part">
                  {piece.type && <h4 className="item-title">{piece.type}</h4>}
                  {piece.description && <p>{piece.description}</p>}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ResumePathList;
