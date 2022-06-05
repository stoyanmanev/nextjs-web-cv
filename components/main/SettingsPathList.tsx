import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useEditUserMutation, User } from "../../generated/graphql";
import ModalPath from "../ModalPath";

interface Props {
  user: User;
  refetch: () => void;
}

const SettingsPathList: React.FC<Props> = ({ user, refetch }) => {
  const [pathResults, setPathResults] = useState<any>(user.personalPath);
  const [showModal, setShowModal] = useState<any>(false);
  
  const { mutate } = useEditUserMutation({
    onSuccess: (data) => {
      refetch();
      setPathResults(data.editUser.personalPath);
      toast.success(
        "You have successfully deleted an item from your personal path"
      );
    },
    onError: () => {
      toast.error("Deletion failed");
    },
  });

  const handleDelete = (index: number) => {
    const filteredList = pathResults.filter(
      (path: any, i: number) => i !== index
    );
    mutate({
      id: user._id,
      data: {
        personalPath: filteredList,
      },
    });
  };

  const handleOpenModalItem = () => {
    setShowModal(true);
  };

  return (
    <div className="list-items-container">
      {pathResults?.length > 0 &&
        pathResults.map((item: any, i: number) => (
          <div key={i} className="list-item-box">
            <div className="path-item">
              <span className="title">{item.headline}</span>
              <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(i)} />
            </div>
          </div>
        ))}
      <div className="btn-container">
        <Button
          onClick={() => handleOpenModalItem()}
          title="Add an item to your facts"
        >
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </div>
      <ModalPath
        setShowModal={setShowModal}
        isModalOpen={showModal}
        refetch={refetch}
        setPathResults={setPathResults}
        user={user}
      />
    </div>
  );
};

export default SettingsPathList;
