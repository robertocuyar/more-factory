import {INVENTORY_SLOTS} from "../actions/types";

export default (state = 8, action) => {
    switch (action.type){
        case INVENTORY_SLOTS:
            return action.payload;
        default:
            return state;
    }
}