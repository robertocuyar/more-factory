import {MINE_LIMESTONE} from "../actions/types";

export const limeMineReducer = function (state = null, action) {
    switch(action.type){
        case MINE_LIMESTONE:
            return action.payload;
        default:
            return state;
    }
}