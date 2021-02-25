import {expect} from "@jest/globals";
import {inventorySlots, mineCoal, mineIron, mineCopper, mineLimestone} from "../../actions";
import {INVENTORY_SLOTS} from "../../actions/types";

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

test("inventorySlots to return payload with slot number", ()=>{
    expect(mineCoal("coal")).toEqual({
        type: INVENTORY_SLOTS,
        payload: "coal"
    });
});

test("mineIron to be defined", ()=>{
    expect(mineIron).toBeDefined();
});

test("mineCopper to be defined", ()=>{
    expect(mineCopper).toBeDefined();
});

test ("mineLimestone to be defined", ()=>{
    expect(mineLimestone).toBeDefined();
});