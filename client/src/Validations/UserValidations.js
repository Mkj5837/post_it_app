import * as yup from "yup";
export const userSchemaValidation = yup.object().shape({
  name: yup.string().min(3).required("Field must not be empty."),
  email: yup
    .string()
    .email("Not a valid email format")
    .required("Email is required"),
  password: yup.string().min(4).max(20).required("Password is required"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords Don't Match")
    .required(),
}); //shape function is used to define the structure of an object schema. It allows you to specify what keys and values an object should have, along with their corresponding validation rules.
