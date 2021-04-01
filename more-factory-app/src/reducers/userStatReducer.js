import {defaultUser} from "./initialStates";
import {STAT_RENDER, UPGRADE_TIER} from "../actions/types";

export default (state = defaultUser, action)=>{
    switch(action.type){
        case STAT_RENDER:
            return action.payload;
        case UPGRADE_TIER:
            state.tier += action.payload;
            return {...state}
        default:
            return state;
    }
}