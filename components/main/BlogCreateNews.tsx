import { FormEvent, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { User } from "../../interfaces/User";

interface Props {
  user: User;
}

const BlogCreateNews: React.FC<Props> = ({ user }) => {
  const [file, setFile] = useState<any>('');
  const changeHandler = (e: any) => {
    e.preventDefault();
    setFile(e.target.files[0]);
  };
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append('image', file, file?.name);
    console.log(file)
  }

  return (
    <div className="blog-form-container">
      <Form onSubmit={(e) => submitHandler(e)} className="blog-form">
        <Form.Group>
          <Form.Control
            type="file"
            onChange={(e) => {changeHandler(e)}}
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
