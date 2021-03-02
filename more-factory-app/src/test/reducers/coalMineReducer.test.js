import {expect} from "@jest/globals";
import coalMineReducer from "../../reducers/coalMineReducer";
import {mineCoal} from "../../actions";

test("coalMineReducer. js is defined", ()=>{
    expect(coalMineReducer).toBeDefined();
})

test("coalMineReducer changes current state from null to a different value", ()=>{
    const state = null;
   expect(coalMineReducer(state, mineCoal("coal"))).toEqual("coal");
});