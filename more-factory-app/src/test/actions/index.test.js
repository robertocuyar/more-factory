import {expect} from "@jest/globals";
import {inventorySlots, userOptionMenu} from "../../actions";
import {INVENTORY_SLOTS, USER_OPTION} from "../../actions/types";

test("inventorySlots to be defined", ()=>{
    expect(inventorySlots).toBeDefined();
});

test("inventorySlots to return payload with slot number", ()=>{
    expect(inventorySlots(5)).toEqual({
        type: INVENTORY_SLOTS,
        payload: 5
    });
});

test("userOptionMenu to be defined", ()=>{
    expect(userOptionMenu).toBeDefined();
});

test("userOptionMenu to return payload with choice string", ()=>{
    expect(userOptionMenu("mine")).toEqual({
        type: USER_OPTION,
        payload: "mine"
    });
});