import { createSlice } from "@reduxjs/toolkit";
import { User } from "./types";
import { RootState } from "../../app/store";

const initialState: Array<User> = [];

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addUser } = usersSlice.actions;
export const userSelector = (state: RootState) => state.userReducer;

export default usersSlice.reducer;
