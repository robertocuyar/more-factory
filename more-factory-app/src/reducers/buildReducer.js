import {BUILD_RENDER} from "../actions/types";
import {defaultBuild} from "./initialStates";

export default (state = defaultBuild, action)=>{
    switch(action.type){
        case BUILD_RENDER:
            return action.payload;
        default:
            return state;
    }
}