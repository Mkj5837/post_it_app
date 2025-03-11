import loginImage from "../Images/loginImage.jpg";
import { userSchemaValidation } from "../Validations/UserValidations";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector, userDispatch } from "react-redux";
import { useState } from "react";
import { addUser, deleteUser, updateUse } from "../Features/UserSlice";

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
import logo from "../Images/logo-t.png";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userSchemaValidation) });

  const userList = useSelector((state) => state.users.value); //(this fetches data)you can put this anywhere, as long as its before the reurn statement.

  const dispatch = useDispatch();
  // Handle form submission:
  //setting the states
  const [name, setname] = useState();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const onSubmit = (data) => {
    // You can handle the form submission here.
    console.log("Form data", data);

    try {
      const userData = {
        name: data.name,
        email: data.email,
        password: data.password,
      };
      alert("Verfication all good.");
      dispatch(addUser(userData)); //use the useDispatch hook to dispatch an action, passing as parameter the userData
    } catch (err) {
      console.log("Error", err);
    }
  };

  const handleDelete = (email) => {
    dispatch(deleteUser(email));
    alert("User Deleted.");
  };

  return (
    <Container>
      <h1>Register</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md={6}>
            Name<br></br>
            <input
              type="text"
              name="name"
              {...register("name", {
                onChange: (e) => setname(e.target.value),
              })}
            ></input>
            {/* {name} to check that it works */}
          </Col>
          <p className="error">{errors.name?.message}</p>
        </Row>
        <Row>
          <Col md={6}>
            Email<br></br>
            <input
              type="email"
              name="email"
              {...register("email", {
                onChange: (e) => setemail(e.target.value),
              })}
            ></input>
          </Col>
          <p className="error">{errors.email?.message}</p>
        </Row>
        <Row>
          <Col md={6}>
            Password<br></br>
            <input
              type="password"
              name="password"
              {...register("password", {
                onChange: (e) => setpassword(e.target.value),
              })}
            ></input>
          </Col>
          <p className="error">{errors.password?.message}</p>
        </Row>
        <Row>
          <Col md={6}>
            Confirm Password<br></br>
            <input
              type="password"
              name="confirmpassword"
              {...register("confirmPassword", {
                onChange: (e) => setconfirmPassword(e.target.value),
              })}
            ></input>
          </Col>
          <p className="error">{errors.confirmPassword?.message}</p>
        </Row>
        <Row>
          <Col md={6}>
            <Button>Register</Button>
          </Col>
        </Row>
      </Form>
      <Row>
        <Col md={6}>
          <h1>List of users</h1>
          <table className="table">
            <tbody>
              {userList.map((user) => (
                <tr key={user.email}>
                  <td>{user.name}</td> <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>
                    <button className="btn btn-primary">Edit</button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(user.email)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
