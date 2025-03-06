import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../ExampleData";

const initialState = { value: UsersData };
//list of user is an object with empty array as initial value(it doesnt have to be an object but best practice)

const userSlice = createSlice({
  name: "users", //this is a must.
  initialState, //this is also a must, its actually initialState:initialState but we shorten it.
  reducer: {}, // anything we want to do goes here (like update, create, delete)
});

export default userSlice.reducer;
