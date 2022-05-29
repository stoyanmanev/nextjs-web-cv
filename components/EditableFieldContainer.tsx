import { FormEvent, useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEditUserMutation } from "../generated/graphql";
import Axios from "axios";

interface Props {
  prop: any;
  type: string;
  userId: string;
  setProp: (type: any) => void;
  setPropArea: (type: boolean) => void;
}

const EditableFieldContainer: React.FC<Props> = ({
  prop,
  type,
  userId,
  setProp,
  setPropArea,
}) => {
  const [changeProp, setChangeProp] = useState<any>(prop ? prop : "");
  const [file, setFile] = useState<any>();
  const { mutate } = useEditUserMutation({
    onSuccess: () => {},
    onError: (err: any) => {
      const errorMsg = String(err).split(":")[1];
      toast.error(`${errorMsg}`);
    },
  });

  const commitEditable = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (type === "img") {
      const isUploaded = await uploadImage();
      if (isUploaded) {
          await mutate({ id: userId, data: { [type]: isUploaded } });
          setPropArea(false);
      } else {
        toast.error(`Image uploaded failed`);
      }
    } else {
      await mutate({ id: userId, data: { [type]: changeProp } });
      setProp(changeProp);
      setPropArea(false);
    }
  };

  const removeChanges = () => {
    setChangeProp(prop);
    setPropArea(false);
  };

  const uploadImage = async () => {
    const fd = new FormData();
    fd.append("file", file);
    fd.append("upload_preset", "u0wnuz7v");

    return Axios.post(
      "https://api.cloudinary.com/v1_1/nextjs-web-cv/image/upload",
      fd
    )
      .then((res) => {
        const uploadUrl = res.data.secure_url;
        return uploadUrl;
      })
      .catch(() => {
        return false;
      });
  };

  const setInputType = () => {
    if (type === "img") {
      return "file";
    }
    if (type) {
      return type;
    }

    return "text";
  };

  const setImageValue = (e: any) => {
    setFile(e[0]);
  };

  return (
    <span className="editable-container editable-inline">
      <div>
        <Form
          className="form-inline editableform"
          onSubmit={(e) => commitEditable(e)}
        >
          <Form.Group className="control-group">
            <Row>
              <Col lg={8} md={8} sm={8} className="editable-input">
                {type !== "img" && (
                  <Form.Control
                    type={setInputType()}
                    value={changeProp}
                    onChange={(e) => {
                      setChangeProp(e.target.value);
                    }}
                  />
                )}
                {type === "img" && (
                  <Form.Control
                    type={setInputType()}
                    onChange={(e: any) => {
                      setImageValue(e.target.files);
                    }}
                  />
                )}
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
    </span>
  );
};

export default EditableFieldContainer;
