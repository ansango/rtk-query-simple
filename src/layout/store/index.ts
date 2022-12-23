import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {},
});

export default layoutSlice.reducer;
