import { combineReducers } from "redux";
import slotReducer from "./slotReducer";
import coalMineReducer from "./coalMineReducer";

export default combineReducers({
    slots: slotReducer,
    coalMined: coalMineReducer
});