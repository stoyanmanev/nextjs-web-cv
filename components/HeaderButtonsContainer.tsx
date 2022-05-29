
interface Props {
  documents?: {cv: string};
}

const HeaderButtonsContainer: React.FC<Props> = ({ documents }) => {
  return (
    <div className="header-buttons">
      {documents?.cv && (
        <a href={documents.cv} target="_blank" rel="noreferrer" className="btn btn-primary">
          Download CV
        </a>
      )}
    </div>
  );
};

export default HeaderButtonsContainer;
