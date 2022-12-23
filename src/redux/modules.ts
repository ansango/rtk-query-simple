import { combineReducers } from "@reduxjs/toolkit";
import security from "../modules/security/store";
import layout from "../layout/store";


export default combineReducers({
  layout,
  security,
});
