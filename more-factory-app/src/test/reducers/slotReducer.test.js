import {expect} from "@jest/globals";
import slotReducer from "../../reducers/slotReducer";
import {inventorySlots} from "../../actions";

test("slotReducer.js is defined", ()=>{
    expect(slotReducer).toBeDefined();
});

test("slotReducer changes state with action to 5", ()=>{
    const state = 8;
    expect(slotReducer(state, inventorySlots(5))).toEqual(5);
});