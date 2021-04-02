import {
    INVENTORY_SLOTS,
    MINE_COAL,
    MINE_COPPER,
    MINE_IRON,
    MINE_LIMESTONE,
    MACHINE_RENDER,
    OPERATE_MACHINE,
    BUILD_RENDER,
    ADD_MACHINE, REMOVE_OPTION, STAT_RENDER, UPGRADE_TIER, MONEY_ADD, MONEY_TAKE
} from "./types";

export const inventorySlots = slots => {
    return {type: INVENTORY_SLOTS, payload: slots};
}

export const mineCoal = coal => {
    return {type: MINE_COAL, payload: coal};
}

export const mineIron = iron => {
    return {type: MINE_IRON, payload: iron};
}

export const mineCopper = copper =>{
    return {type: MINE_COPPER, payload: copper};
}

export const mineLimestone = limestone =>{
    return {type: MINE_LIMESTONE, payload: limestone};
}

export const machineRender = machines => {
    return {type: MACHINE_RENDER, payload: machines};
}

export const operateMachine = (inventory, time) => dispatch => {
    setTimeout(()=>{
        dispatch({type: OPERATE_MACHINE, payload: inventory})
    }, time);
}

export const buildRender = build => {
    return {type: BUILD_RENDER, payload: build};
}

export const addMachine = machine => {
    return {type: ADD_MACHINE, payload: machine};
}

export const removeOption = option => {
    return {type: REMOVE_OPTION, payload: option};
}

export const statRender = stats => {
    return {type: STAT_RENDER, payload: stats};
}

export const upgradeTier = ()=>{
    return {type: UPGRADE_TIER, payload: 1};
}

export const moneyAdd = amt => {
    return {type: MONEY_ADD, payload: amt};
}

export const moneyTake = amt => {
    return {type: MONEY_TAKE, payload: amt};
}