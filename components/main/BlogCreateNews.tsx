import { FormEvent, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { User } from "../../interfaces/User";

interface Props {
  user: User;
}

const BlogCreateNews: React.FC<Props> = ({ user }) => {
  const [file, setFile] = useState<any>();

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(file)
  };

  return (
    <div className="blog-form-container">
      <Form onSubmit={(e) => submitHandler(e)} className="blog-form">
        <Form.Group>
          <Form.Control
            type="file"
            value={file}
            onChange={(e) => {setFile(e.target.value)}}
            placeholder="Submit File"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default BlogCreateNews;
