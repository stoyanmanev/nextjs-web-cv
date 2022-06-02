import { faArrowsRotate, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormEvent, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { Fact, useEditUserMutation, User } from "../../generated/graphql";
import { v4 as uuid_v4 } from "uuid";

interface Props {
  setShowModal: (type: Boolean) => void;
  refetch: () => void;
  setUserFactsList: (type: Fact) => void;
  user: User;
}

const FactItemForm: React.FC<Props> = ({
  setShowModal,
  refetch,
  setUserFactsList,
  user,
}) => {
  const [name, setName] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const isContentPreset = name !== "" && value !== "";
  const { mutate } = useEditUserMutation({
    onSuccess: (data) => {
      const userData: any = data?.editUser; // QuickFix: type any to be type User
      setUserFactsList(userData.facts);
      setShowModal(false);
      toast.info(`Profile updated!`);
      refetch();
    },
    onError: (err: any) => {
      const errorMsg = String(err).split(":")[1];
      toast.error(`${errorMsg}`);
    },
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isContentPreset) return false;
    const _id = uuid_v4();
    const v = Number(value);
    user.facts && user.facts.push({ _id, name, value: v });
    const collect: any = user.facts;
    await mutate({ id: user._id, data: { facts: collect } });
  };

  const handleReset = () => {
    setName("");
    setValue("");
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
        <Col sm={4}>
          <Form.Control
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Value"
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

export default FactItemForm;
