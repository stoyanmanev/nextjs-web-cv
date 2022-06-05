import { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";

interface Props {}

const PathFormAutomaticsFields: React.FC<Props> = () => {
  const [year, setYear] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  return (
    <Form.Group className="path-form-group">
      <Row>
        <Col sm={4}>
          <Form.Control
            type="text"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="Year"
          />
        </Col>
        <Col sm={4}>
          <Form.Control
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
          />
        </Col>
        <Col sm={4}>
          <Form.Control
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            placeholder="Type"
          />
        </Col>
        <Col sm={12}>
          <Form.Control
            as="textarea"
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
        </Col>
      </Row>
    </Form.Group>
  );
};

export default PathFormAutomaticsFields;
