import { FormEvent, useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEditUserMutation, User } from "../generated/graphql";

interface Props {
  prop: any;
  type: string;
  userId: string;
  setProp: (type: any) => void;
  setPropArea: (type: boolean) => void;
  setUser?: (type: User) => void;
}

const EditableFieldTextArea: React.FC<Props> = ({
  prop,
  type,
  userId,
  setProp,
  setPropArea,
  setUser,
}) => {
  const [changeProp, setChangeProp] = useState<any>(prop);
  const { mutate } = useEditUserMutation({
    onSuccess: (data) => {
      toast.info(`Profile updated!`);
      const userData: any = data?.editUser; // QuickFix: type any to be type User
      setUser !== undefined && setUser(userData);
    },
    onError: (err: any) => {
      const errorMsg = String(err).split(":")[1];
      toast.error(`${errorMsg}`);
    },
  });

  const commitEditable = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await mutate({ id: userId, data: { [type]: changeProp } });
    setProp(changeProp);
    setPropArea(false);
  };

  const removeChanges = () => {
    setChangeProp(prop);
    setPropArea(false);
  };

  return (
    <div className="editable-container editable-inline">
      <div>
        <Form
          className="form-inline editableform"
          onSubmit={(e) => commitEditable(e)}
        >
          <Form.Group className="control-group">
            <Row>
              <Col lg={8} md={8} sm={8} className="editable-input">
                <Form.Control
                  as="textarea"
                  rows={5}
                  value={changeProp}
                  onChange={(e) => {
                    setChangeProp(e.target.value);
                  }}
                />
              </Col>
              <Col lg={4} md={4} sm={4} className="editable-buttons">
                <Row>
                  <Col lg={6} md={6} sm={6}>
                    <Button type="submit" className="editable-submit">
                      <FontAwesomeIcon icon={faCheck} />
                    </Button>
                  </Col>
                  <Col lg={6} md={6} sm={6}>
                    <Button
                      type="button"
                      className="editable-cancel"
                      onClick={() => removeChanges()}
                    >
                      <FontAwesomeIcon icon={faXmark} />
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default EditableFieldTextArea;
