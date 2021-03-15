import {expect} from "@jest/globals";
import {inventorySlots, mineCoal, mineIron, mineCopper, mineLimestone, machineRender, removeItem} from "../../actions";
import {INVENTORY_SLOTS, MINE_COAL, MINE_IRON, MINE_COPPER, MINE_LIMESTONE, MACHINE_RENDER, REMOVE_ITEM} from "../../actions/types";
import {firstCoal, firstIron, firstCopper, firstLimestone, defaultMachine, defaultBag} from "../../reducers/initialStates";

test("inventorySlots to be defined", ()=>{
    expect(inventorySlots).toBeDefined();
});

test("inventorySlots to return payload with slot number", ()=>{
    expect(inventorySlots(5)).toEqual({
        type: INVENTORY_SLOTS,
        payload: 5
    });
});

test("mineCoal to be defined", ()=>{
   expect(mineCoal).toBeDefined();
});

test("mineCoal to return correct payload", ()=>{
    expect(mineCoal(firstCoal)).toEqual({
        type: MINE_COAL,
        payload: firstCoal
    });
});

test("mineIron to be defined", ()=>{
    expect(mineIron).toBeDefined();
});

test("mineIron to return correct payload", ()=>{
    expect(mineIron(firstIron)).toEqual({
        type: MINE_IRON,
        payload: firstIron
    });
});

test("mineCopper to be defined", ()=>{
    expect(mineCopper).toBeDefined();
});

test("mineCopper to return correct payload", ()=>{
    expect(mineCopper(firstCopper)).toEqual ({
        type: MINE_COPPER,
        payload: firstCopper
    });
});

test ("mineLimestone to be defined", ()=>{
    expect(mineLimestone).toBeDefined();
});

test("mineLimestone to return correct payload", ()=>{
    expect(mineLimestone(firstLimestone)).toEqual({
        type: MINE_LIMESTONE,
        payload: firstLimestone
    });
});

test("machineRender to be defined", ()=>{
    expect(machineRender).toBeDefined();
});

test("machineRender to return correct payload", ()=>{
    expect(machineRender(defaultMachine)).toEqual({
        type: MACHINE_RENDER,
        payload: defaultMachine
    });
});

test("removeItem to be defined", ()=>{
    expect(removeItem).toBeDefined();
});

test("removeItem to return correct payload", ()=>{
    expect(removeItem(defaultBag)).toEqual({
        type: REMOVE_ITEM,
        payload: defaultBag
    })
});