import {INVENTORY_SLOTS, MINE_COAL, MINE_COPPER, MINE_IRON, MINE_LIMESTONE} from "./types";

export const inventorySlots = slots => {
    return {
        type: INVENTORY_SLOTS,
        payload: slots
    }
}

export const mineCoal = coal => {
    return {
        type: MINE_COAL,
        payload: coal
    }
}

export const mineIron = iron => {
    return {
        type: MINE_IRON,
        payload: iron
    }
}

export const mineCopper = copper =>{
    return {
        type: MINE_COPPER,
        payload: copper
    }
}

export const mineLimestone = limestone =>{
    return {
        type: MINE_LIMESTONE,
        payload: limestone
    }
}