import {defaultUser} from "./initialStates";
import {MONEY_ADD, MONEY_TAKE, STAT_RENDER, UPGRADE_TIER} from "../actions/types";

export const userStatReducer = function(state = defaultUser, action){
    switch(action.type){
        case STAT_RENDER:
            return action.payload;
        case UPGRADE_TIER:
            state.tier += action.payload;
            return {...state};
        case MONEY_ADD:
            state.currency += action.payload;
            return {...state};
        case MONEY_TAKE:
            state.currency -= action.payload;
            return {...state};
        default:
            return state;
    }
}