import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { FactInput, useEditUserMutation, User } from "../../generated/graphql";
import ModalFact from "../ModalFact";

interface Props {
  user: User;
  refetch: () => void;
}

const SettingsFactsContainer: React.FC<Props> = ({
  user,
  refetch,
}) => {
  const [userFactsList, setUserFactsList] = useState<any>(user.facts); // QuickFix: any will be type Portfolio[]
  const [showModal, setShowModal] = useState<any>(false);
  const { mutate } = useEditUserMutation({
    onSuccess: (data) => {
      const userData: any = data?.editUser; // QuickFix: type any to be type User
      setUserFactsList(userData.facts);
      toast.info(`Profile updated!`);
    },
    onError: (err: any) => {
      const errorMsg = String(err).split(":")[1];
      toast.error(`${errorMsg}`);
    },
  });

  const handleDelete = (id: string) => {
    const filteredFactList = userFactsList.filter(
      (fact: { _id: string }) => fact._id !== id
    );
    mutate({ id: user._id, data: { facts: filteredFactList } });
  };

  const handleOpenModalItem = () => {
    setShowModal(true);
  };

  return (
    <div className="list-items-container">
      {userFactsList?.length > 0 &&
        userFactsList.map((item: FactInput) => (
          <div key={item._id} className="list-item-box">
            <div className="fact-item">
              <span className="title">{item.name}</span>
              <span className="title">{item.value}</span>
              <FontAwesomeIcon
                icon={faTrash}
                onClick={() => handleDelete(item._id)}
              />
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
      <ModalFact
        setShowModal={setShowModal}
        isModalOpen={showModal}
        refetch={refetch}
        setUserFactsList={setUserFactsList}
        user={user}
      />
    </div>
  );
};

export default SettingsFactsContainer;
