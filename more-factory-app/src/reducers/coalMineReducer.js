import {MINE_COAL} from "../actions/types";

export const coalMineReducer = function (state = null, action) {
    switch (action.type) {
        case MINE_COAL:
            return action.payload;
        default:
            return state;
    }
}