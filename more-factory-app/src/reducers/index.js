import { combineReducers } from "redux";
import slotReducer from "./slotReducer";
import coalMineReducer from "./coalMineReducer";
import ironMineReducer from "./ironMineReducer";
import copperMineReducer from "./copperMineReducer";

export default combineReducers({
    slots: slotReducer,
    coalMined: coalMineReducer,
    ironMined: ironMineReducer,
    copperMined: copperMineReducer
});