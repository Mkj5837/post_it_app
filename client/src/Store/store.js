import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../Features/UserSlice";

export const store = configureStore({
  //it will accept an object.
  reducer: {
    users: usersReducer,
  },
});
