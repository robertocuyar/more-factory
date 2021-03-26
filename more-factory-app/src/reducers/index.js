import { combineReducers } from "redux";
import slotReducer from "./slotReducer";
import coalMineReducer from "./coalMineReducer";
import ironMineReducer from "./ironMineReducer";
import copperMineReducer from "./copperMineReducer";
import limeMineReducer from "./limeMineReducer";
import machinesReducer from "./machinesReducer";
import buildReducer from "./buildReducer";
import userStatReducer from "./userStatReducer";

export default combineReducers({
    slotsInv: slotReducer,
    coalMined: coalMineReducer,
    ironMined: ironMineReducer,
    copperMined: copperMineReducer,
    limeMined: limeMineReducer,
    machines: machinesReducer,
    buildOpt: buildReducer,
    userStats: userStatReducer
});