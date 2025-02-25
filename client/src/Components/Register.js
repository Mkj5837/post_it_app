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
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div>
      <Container>
        <Form>
          <Label for="exampleName">Name</Label>
          <Input
            id="exampleName"
            name="Name"
            placeholder="John Doe"
            type="text"
          />

          <Label for="exampleEmail">Email</Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="Email"
            type="email"
          />

          <Label for="examplePassword">Password</Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="Password"
            type="password"
          />

          <Label for="confirmPassword">Password</Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            type="password"
          />

          <Button>Submit</Button>
        </Form>
        <p className="smalltext">
          Have an Account? <Link to="/login">Log In Now.</Link>
        </p>
      </Container>
    </div>
  );
};

export default Register;
