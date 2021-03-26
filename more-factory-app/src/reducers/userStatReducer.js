import {defaultUser} from "./initialStates";
import {STAT_RENDER} from "../actions/types";

export default (state = defaultUser, action)=>{
    switch(action.type){
        case STAT_RENDER:
            return action.payload;
        default:
            return state;
    }
}