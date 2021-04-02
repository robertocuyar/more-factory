import {MINE_COPPER} from "../actions/types";

export const copperMineReducer = function(state = null, action) {
    switch(action.type){
        case MINE_COPPER:
            return action.payload;
        default :
            return state;
    }
}