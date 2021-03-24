import {
    INVENTORY_SLOTS,
    MINE_COAL,
    MINE_COPPER,
    MINE_IRON,
    MINE_LIMESTONE,
    MACHINE_RENDER,
    REMOVE_ITEM,
    BUILD_RENDER,
    ADD_MACHINE, REMOVE_OPTION
} from "./types";

export const inventorySlots = slots => {
    return {type: INVENTORY_SLOTS, payload: slots}
}

export const mineCoal = coal => {
    return {type: MINE_COAL, payload: coal}
}

export const mineIron = iron => {
    return {type: MINE_IRON, payload: iron}
}

export const mineCopper = copper =>{
    return {type: MINE_COPPER, payload: copper}
}

export const mineLimestone = limestone =>{
    return {type: MINE_LIMESTONE, payload: limestone}
}

export const machineRender = machines => {
    return {type: MACHINE_RENDER, payload: machines}
}

export const removeItem = inventory => {
    return {type: REMOVE_ITEM, payload: inventory}
}

export const buildRender = build => {
    return {type: BUILD_RENDER, payload: build}
}

export const addMachine = machine => {
    return {type: ADD_MACHINE, payload: machine}
}

export const removeOption = option => {
    return {type: REMOVE_OPTION, payload: option}
}
