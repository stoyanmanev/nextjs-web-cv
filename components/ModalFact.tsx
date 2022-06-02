import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Fact, User } from "../generated/graphql";
import FactItemForm from "./main/FactItemForm";

interface Props {
  isModalOpen: Boolean;
  setShowModal: (type: Boolean) => void;
  refetch: () => void;
  setUserFactsList: (type: Fact) => void;
  user: User;
}

const ModalFact: React.FC<Props> = ({
  setShowModal,
  isModalOpen,
  refetch,
  setUserFactsList,
  user,
}) => {
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className={`modal-container ${isModalOpen && "modal-open"}`}>
      <div className="modal-content">
        {isModalOpen && (
          <>
            <div className="modal-header">
              <h3>Fact Item</h3>
              <span onClick={() => handleClose()} className="close-tag">
                <FontAwesomeIcon icon={faClose} />
              </span>
            </div>
            <div className="modal-body">
              <FactItemForm
                setShowModal={setShowModal}
                refetch={refetch}
                setUserFactsList={setUserFactsList}
                user={user}
              />
            </div>
            <div className="modal-footer"></div>
          </>
        )}
      </div>
    </div>
  );
};

export default ModalFact;
