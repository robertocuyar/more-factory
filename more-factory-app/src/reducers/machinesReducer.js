import {ADD_MACHINE, MACHINE_RENDER} from "../actions/types";
import {defaultMachine} from "./initialStates";

export default (state = defaultMachine, action)=>{
    switch(action.type){
        case MACHINE_RENDER:
            return action.payload;
        case ADD_MACHINE:
            const {build, ...actualObj} = action.payload;
            state.machines = [...state.machines, actualObj];
            return {...state};
        default:
            return state;
    }
}