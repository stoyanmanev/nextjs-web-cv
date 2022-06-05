import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { User } from "../generated/graphql";
import PathFormItem from "./main/PathFormItem";

interface Props {
  isModalOpen: Boolean;
  setShowModal: (type: Boolean) => void;
  refetch: () => void;
  setPathResults: (type: any) => void;
  user: User;
}

const ModalPath: React.FC<Props> = ({
  setShowModal,
  isModalOpen,
  refetch,
  setPathResults,
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
              <h3>Personal Path Item</h3>
              <span onClick={() => handleClose()} className="close-tag">
                <FontAwesomeIcon icon={faClose} />
              </span>
            </div>
            <div className="modal-body">
              <PathFormItem
                setShowModal={setShowModal}
                refetch={refetch}
                setPathResults={setPathResults}
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

export default ModalPath;
