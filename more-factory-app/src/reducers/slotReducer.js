import {INVENTORY_SLOTS} from "../actions/types";
import {defaultBag} from "./initialStates";

export const slotReducer = function (state = defaultBag, action) {
    switch (action.type){
        case INVENTORY_SLOTS:
            return action.payload;
        default:
            return state;
    }
}