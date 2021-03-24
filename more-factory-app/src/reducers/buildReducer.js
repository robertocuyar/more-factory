import {BUILD_RENDER, REMOVE_OPTION} from "../actions/types";
import {defaultBuild} from "./initialStates";

export default (state = defaultBuild, action)=>{
    switch(action.type){
        case BUILD_RENDER:
            return action.payload;
        case REMOVE_OPTION:
            state.machines = state.machines.filter(option => option.content !== action.payload.content)
            return {...state}
        default:
            return state;
    }
}