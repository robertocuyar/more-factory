import {defaultUser} from "./initialStates";
import {STAT_RENDER, POWER_CHANGE} from "../actions/types";

export default (state = defaultUser, action)=>{
    switch(action.type){
        case STAT_RENDER:
            return action.payload;
        case POWER_CHANGE:
            state.power.current = action.payload;
            return {...state}
        default:
            return state;
    }
}