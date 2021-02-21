import {expect} from "@jest/globals";
import {inventorySlots} from "../../actions";
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