import {defaultUser} from "./initialStates";
import {CHANGE_CLIENTS, MONEY_ADD, MONEY_TAKE, STAT_RENDER, UPGRADE_TIER} from "../actions/types";

export const userStatReducer = (state = defaultUser, action) =>{
    switch(action.type){
        case STAT_RENDER:
            return action.payload;
        case UPGRADE_TIER:
            return {...state, tier: state.tier + action.payload};
        case MONEY_ADD:
            return {...state, currency: state.currency + action.payload};
        case MONEY_TAKE:
            return {...state, currency: state.currency - action.payload};
        case CHANGE_CLIENTS:
            return {...state, clients: action.payload}
        default:
            return state;
    }
}