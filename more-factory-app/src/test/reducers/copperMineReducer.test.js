import {expect} from "@jest/globals";
import copperMineReducer from "../../reducers/copperMineReducer";
import {mineCopper} from "../../actions";

test("copperMineReducer.js is defined", ()=>{
    expect(copperMineReducer).toBeDefined();
});

test("copperMineReducer changes current state from null to a different value", ()=>{
    expect(copperMineReducer(null, mineCopper("copper")));
});