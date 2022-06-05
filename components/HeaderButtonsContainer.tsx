
interface Props {
  cv: string;
}

const HeaderButtonsContainer: React.FC<Props> = ({ cv }) => {
  return (
    <div className="header-buttons">
      {cv && (
        <a href={cv} target="_blank" rel="noreferrer" className="btn btn-primary">
          Download CV
        </a>
      )}
    </div>
  );
};

export default HeaderButtonsContainer;
