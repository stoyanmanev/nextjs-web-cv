import { FormEvent, useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { toast } from "react-toastify";
import { useCreateUserMutation } from "../../generated/graphql";

const RegisterContainer: React.FC = () => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [RP, setRP] = useState("");
  const { mutate } = useCreateUserMutation({
    onSuccess: () => {
      toast.success(`Account creation successful. Please try logging in.`);
    },
    onError: (error) => {
      const errorMsg = String(error).split(":")[1];
      toast.error(`Account creation failed`);
      toast.info(`Info: ${errorMsg}`);
    },
  });

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password.length === 0) {
      return toast.error(`Password field is empty`);
    }
    if (password !== RP) {
      return toast.error(`The passwords do not match`);
    }

    await mutate({ data: { fullname, email, password } });
    setFullName("");
    setEmail("");
    setPassword("");
    setRP("");
  };

  return (
    <header id="site_header_register" className="header">
      <div className="header-content">
        <div className="header-titles">
          <h2>Sing Up</h2>
        </div>
        <Form onSubmit={(e) => submitHandler(e)}>
          <Form.Group>
            <InputGroup className="mb-2">
              <InputGroup.Text>Your Full Name</InputGroup.Text>
              <Form.Control
                type="text"
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
                value={fullname}
                placeholder="Example Name"
              />
            </InputGroup>
          </Form.Group>
          <Form.Group>
            <InputGroup className="mb-2">
              <InputGroup.Text>Your E-Mail</InputGroup.Text>
              <Form.Control
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                placeholder="example@mail.com"
              />
            </InputGroup>
          </Form.Group>
          <Form.Group>
            <InputGroup className="mb-2">
              <InputGroup.Text>Your Password</InputGroup.Text>

              <Form.Control
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                placeholder="********"
              />
            </InputGroup>
          </Form.Group>
          <Form.Group>
            <InputGroup className="mb-2">
              <InputGroup.Text>Repeat Password</InputGroup.Text>

              <Form.Control
                type="password"
                onChange={(e) => {
                  setRP(e.target.value);
                }}
                value={RP}
                placeholder="********"
              />
            </InputGroup>
          </Form.Group>
          <Button type="submit"> Sing Up </Button>
        </Form>
      </div>
    </header>
  );
};

export default RegisterContainer;
