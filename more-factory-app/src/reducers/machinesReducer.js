import {MACHINE_RENDER} from "../actions/types";
import {defaultMachine} from "./initialStates";

export default (state = defaultMachine, action)=>{
    switch(action.type){
        case MACHINE_RENDER:
            return action.payload;
        default:
            return state;
    }
}