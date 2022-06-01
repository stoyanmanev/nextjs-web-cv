import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import PortfolioItemForm from "./main/PortfolioItemForm";

interface Props {
  isModalOpen: Boolean;
  setShowModal: (type: Boolean) => void;
  refetch: () => void;
}

const ModalPortfolio: React.FC<Props> = ({ setShowModal, isModalOpen, refetch }) => {
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className={`modal-container ${isModalOpen && "modal-open"}`}>
      <div className="modal-content">
        {isModalOpen && (
          <>
            <div className="modal-header">
              <h3>Portfolio Item</h3>
              <span onClick={() => handleClose()} className="close-tag">
                <FontAwesomeIcon icon={faClose} />
              </span>
            </div>
            <div className="modal-body">
              <PortfolioItemForm setShowModal={setShowModal} refetch={refetch}/>
            </div>
            <div className="modal-footer"></div>
          </>
        )}
      </div>
    </div>
  );
};

export default ModalPortfolio;
