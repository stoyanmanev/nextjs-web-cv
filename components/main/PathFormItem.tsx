import { faArrowsRotate, faCheck, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormEvent, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { PersonalPathInput, Piece, useEditUserMutation, User } from "../../generated/graphql";
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
  const [generatedFields, setGeneratedFields] = useState<number>(0);
  const [generatedValue, setGeneratedValue] = useState<any>({});
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

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const pieces: Array<any> = [];
    Object.values(generatedValue).forEach(item => pieces.push(item));
    console.log(Object.values(pieces))
    const personalPathObject: any = {
      _id: uuid_v4(),
      headline,
      pieces
    }
    user.personalPath && user.personalPath.push(personalPathObject);
    
    user.personalPath && mutate({id: user._id, data: {
      personalPath: user.personalPath
    }})
  };

  const renderGeneratedFields = () => {
    const componentsList = [];
    for (let i = 0; i < generatedFields; i++) {
      componentsList.push(
        <PathFormAutomaticsFields
          key={i}
          setGeneratedValue={setGeneratedValue}
          generatedValue={generatedValue}
          numberContainer={i}
        />
      );
    }
    return componentsList.map((item) => item);
  };

  const incrementGeneratedFields = () => {
    const fields = generatedFields + 1;
    setGeneratedFields(fields);
  };

  const decrementGeneratedFields = () => {
    if (generatedFields < 1) return false;
    const fields = generatedFields - 1;
    delete generatedValue[fields];
    const filterObject = generatedValue[fields];
    setGeneratedFields(filterObject);
    setGeneratedFields(fields);
  };

  const handleReset = () => {
    setHeadline("");
    setGeneratedFields(0)
    setGeneratedValue({})
  };

  return (
    <Form onSubmit={(e) => submitHandler(e)} className="auto-generated-fields-form">
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
          {renderGeneratedFields()}
          <div className="generated-btns">
              <Button
                className="increment-fields"
                onClick={() => decrementGeneratedFields()}
              >
                <FontAwesomeIcon icon={faMinus} />
              </Button>
              <Button
                className="increment-fields"
                onClick={() => incrementGeneratedFields()}
              >
                <FontAwesomeIcon icon={faPlus} />
              </Button>
            </div>
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
