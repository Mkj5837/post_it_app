import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../ExampleData";

const initialState = { value: UsersData };
//list of user is an object with empty array as initial value(it doesnt have to be an object but best practice)

const userSlice = createSlice({
  name: "users", //this is a must.
  initialState, //this is also a must, its actually initialState:initialState but we shorten it.
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
      // using the push function cus the  values are in array payload just means "data"
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.email !== action.payload);
    },
    updateUser: (state, action) => {
      state.value.map((user) => {
        //iterate the  array and compare the email with the email from the payload
        if (user.email === action.payload.email) {
          user.name = action.payload.name;
          user.password = action.payload.password;
        }
      });
    },
  }, // anything we want to do goes here (like update, create, delete). you cant do anything without the reducer.
});

export const { addUser, deleteUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
