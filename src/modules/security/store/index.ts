import { combineReducers, createSlice } from "@reduxjs/toolkit";
import { userApi } from "../services";
import { initialState } from "./state";

const securitySlice = createSlice({
  name: "security",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      userApi.endpoints.getUsers.matchFulfilled,
      (state, action) => {
        state.users = action.payload;
      }
    );
  },
});

export default securitySlice.reducer;
