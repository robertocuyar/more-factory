import {MACHINE_RENDER} from "../actions/types";

export default (state = {}, action)=>{
    switch(action.type){
        case MACHINE_RENDER:
            return action.payload;
        default:
            return state;
    }
}