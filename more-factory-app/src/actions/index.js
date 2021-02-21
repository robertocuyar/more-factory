import {INVENTORY_SLOTS} from "./types";

export const inventorySlots = slots => {
    return {
        type: INVENTORY_SLOTS,
        payload: slots
    }
}