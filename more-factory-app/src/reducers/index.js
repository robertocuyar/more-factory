import { combineReducers } from "redux";
import slotReducer from "./slotReducer";
import coalMineReducer from "./coalMineReducer";
import ironMineReducer from "./ironMineReducer";

export default combineReducers({
    slots: slotReducer,
    coalMined: coalMineReducer,
    ironMined: ironMineReducer
});