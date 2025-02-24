import loginImg from "../Images/loginImage.jpg";
import { Link } from "react-router-dom";
import {
  Button,
  Col,
  Label,
  Container,
  Row,
  FormGroup,
  Input,
  Form,
} from "reactstrap";
const Login = () => {
  return (
    <div>
      <Container>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Email"
              type="email"
            />
          </FormGroup>{" "}
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="Password"
              type="password"
            />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
        <p className="smalltext">
          No Account? <Link to="/register">Sign Up now.</Link>
        </p>
      </Container>
    </div>
  );
};

export default Login;
