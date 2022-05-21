import { Knowledge } from "../../interfaces/Knowledge";

interface Props {
  knowledges: Knowledge[];
}

const ResumeKnowledges: React.FC<Props> = ({ knowledges }) => {
  return (
    <div className="knowledges-container">
      <div className="block-title">
        <h3>Knowledges</h3>
      </div>
      <ul className="knowledges">
        {knowledges.map((knowledge, i) => {
          return <li key={knowledge.type}>{knowledge.type}</li>;
        })}
      </ul>
    </div>
  );
};

export default ResumeKnowledges;
