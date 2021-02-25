import {expect} from "@jest/globals";
import {inventorySlots, mineCoal, mineIron, mineCopper, mineLimestone} from "../../actions";
import {INVENTORY_SLOTS, MINE_COAL, MINE_IRON, MINE_COPPER, MINE_LIMESTONE} from "../../actions/types";
import {firstCoal, firstIron, firstCopper, firstLimestone} from "../../reducers/initialStates";

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
})

test ("mineLimestone to be defined", ()=>{
    expect(mineLimestone).toBeDefined();
});

test("mineLimestone to return correct payload", ()=>{
    expect(mineLimestone(firstLimestone)).toEqual({
        type: MINE_LIMESTONE,
        payload: firstLimestone
    });
})