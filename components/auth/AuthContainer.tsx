import { FormEvent, useState } from "react";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";
import { useLoginMutation } from "../../generated/graphql";

interface Props {
  setToken: (type: string) => void;
}

const AuthContainer: React.FC<Props> = ({setToken}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cookie, setCookie] = useCookies(["token"]);

  const {mutate} = useLoginMutation({
    onSuccess: async (data) => {
      await setToken(data.login);
      await setCookie("token", data.login, {
        path: "/",
        maxAge: 360000,
        sameSite: true,
      });
    },
    onError: (error) => {
      const errorMsg = String(error).split(":")[1];
      toast.error(`Аccess denied`);
      toast.info(`Info: ${errorMsg}`);
    }
  })


  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await mutate({email, password});
  }

  return (
    <div data-id="login" className="animated-section section-active">
      <div className="section-content content-centered">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="header-titles">
                <h2>Hello again!</h2>
                <p>
                  Hey, Enter your details to get sing in toyour account
                </p>
              </div>
              <div className="option-container">
                <Form onSubmit={(e) => submitHandler(e)}>
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
                  <Button type="submit"> Sing In </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AuthContainer;
