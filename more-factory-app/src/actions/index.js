import {INVENTORY_SLOTS, USER_OPTION} from "./types";

export const inventorySlots = slots => {
    return {
        type: INVENTORY_SLOTS,
        payload: slots
    }
}

export const userOptionMenu = choice => {
    return {
        type: USER_OPTION,
        payload: choice
    }
}