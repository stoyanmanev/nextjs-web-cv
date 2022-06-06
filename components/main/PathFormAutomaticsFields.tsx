import { useState, useEffect } from "react";
import { Form, Row, Col } from "react-bootstrap";

interface Props {
  setGeneratedValue: (type: any) => void;
  numberContainer: number;
  generatedValue: any;
}

const PathFormAutomaticsFields: React.FC<Props> = ({
  setGeneratedValue,
  numberContainer,
  generatedValue,
}) => {
  const [year, setYear] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleChange = () => {
    const generatedObj = {
      year,
      location,
      type,
      description,
    };
    generatedValue[numberContainer] = generatedObj;
    const preparedObj = generatedValue;
    return setGeneratedValue(preparedObj);
  };

  useEffect(() => {
    handleChange();
  }, [year, location, type, description]);

  return (
    <div className="auto-field-container">
      <Form.Group className="path-form-group">
        <Row>
          <Col sm={4}>
            <Form.Control
              type="text"
              value={year}
              onChange={(e) => {
                setYear(e.target.value);
              }}
              placeholder="Year"
            />
          </Col>
          <Col sm={4}>
            <Form.Control
              type="text"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              placeholder="Location"
            />
          </Col>
          <Col sm={4}>
            <Form.Control
              type="text"
              value={type}
              onChange={(e) => {
                setType(e.target.value);
              }}
              placeholder="Type"
            />
          </Col>
          <Col sm={12}>
            <Form.Control
              as="textarea"
              rows={5}
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              placeholder="Description"
            />
          </Col>
        </Row>
      </Form.Group>
    </div>
  );
};

export default PathFormAutomaticsFields;
