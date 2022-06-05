import { faArrowsRotate, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormEvent, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { Fact, useEditUserMutation, User } from "../../generated/graphql";
import { v4 as uuid_v4 } from "uuid";
import PathFormAutomaticsFields from "./PathFormAutomaticsFields";

interface Props {
  setShowModal: (type: Boolean) => void;
  refetch: () => void;
  setPathResults: (type: any) => void;
  user: User;
}

const PathFormItem: React.FC<Props> = ({
  setShowModal,
  refetch,
  setPathResults,
  user,
}) => {
  const [headline, setHeadline] = useState<string>("");
  const [autoFields, setAutoFields] = useState<number>(1);
  const isContentPreset = headline !== "";
  const { mutate } = useEditUserMutation({
    onSuccess: (data) => {
      setPathResults(data.editUser.personalPath);
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
    // user.facts && user.facts.push({ _id, name, value: v });
    const collect: any = user.facts;
    // await mutate({ id: user._id, data: { facts: collect } });
  };

  const handleReset = () => {
    setHeadline("");

  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <Row>
        <Col sm={12}>
          <Form.Control
            type="text"
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
            placeholder="Headline"
          />
        </Col>
        <Col sm={12}>
          <PathFormAutomaticsFields />
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

export default PathFormItem;
