import {MINE_IRON} from "../actions/types";

export default (state = null , action) =>{
    switch(action.type){
        case MINE_IRON:
            return action.payload;
        default:
            return state;
    }
}
