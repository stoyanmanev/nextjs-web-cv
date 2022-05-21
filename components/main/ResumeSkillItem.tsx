import CSS from "csstype";

interface Props {
  list: { type: string; value: number }[];
}

const ResumeSkillItem: React.FC<Props> = ({ list }) => {
  return (
    <>
      {list.map((item, i) => {
       
        return (
          <div key={i} className="">
            <div className="skill clearfix">
              <h4>{item.type}</h4>
              <div className="skill-value">{item.value}</div>
            </div>
            <div className={`skill-container skill-${i + 1}`}>
              <div className="skill-percentage" style={{width: `${item.value}%`}}></div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ResumeSkillItem;
