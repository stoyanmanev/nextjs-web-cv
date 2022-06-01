import { faCheck, faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useCreatePortfolioMutation } from "../../generated/graphql";

interface Props {
  setShowModal: (type: Boolean) => void;
  refetch: () => void;
}

const PortfolioItemForm: React.FC<Props> = ({ setShowModal, refetch }) => {
  const [name, setName] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [link, setLink] = useState<string>("");

  const isContentPreset = name !== "" && category !== "" && link !== "";
  const createPortfolioItem = useCreatePortfolioMutation({
    onSuccess: () => {
      toast.success("You have successfully create an item from your portfolio");
      refetch();
    },
    onError: () => {
      toast.error("Creation failed");
    },
  });

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isContentPreset) return false;

    await createPortfolioItem.mutate({data: {name, category, link}});
    setShowModal(false);
  };

  const handleReset = () => {
    setName("");
    setCategory("");
    setLink("");
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <Row>
        <Col sm={5}>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </Col>
        <Col sm={3}>
          <Form.Control
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Category"
          />
        </Col>
        <Col sm={4}>
          <Form.Control
            type="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="Link"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="form-btn-container">
            <Button
              onClick={() => handleReset()}
              type="reset"
              className={`reset-btn`}
            >
              <FontAwesomeIcon icon={faArrowsRotate} />
            </Button>
            <Button
              type="submit"
              className={`submit-btn ${!isContentPreset && "btn-disable"}`}
            >
              <FontAwesomeIcon icon={faCheck} />
            </Button>
          </div>
        </Col>
      </Row>
    </Form>
  );
};

export default PortfolioItemForm;
