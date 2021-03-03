import {expect} from "@jest/globals";
import ironMineReducer from "../../reducers/ironMineReducer";
import {mineIron} from "../../actions";

test("ironMineReducer.js is defined", ()=>{
    expect(ironMineReducer).toBeDefined();
});

test("ironMineReducer changes current state from null to a different value", ()=>{
    const state = null;
    expect(ironMineReducer(state, mineIron("iron"))).toEqual("iron");
})