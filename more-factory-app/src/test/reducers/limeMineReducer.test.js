import {expect} from "@jest/globals";
import limeMineReducer from "../../reducers/limeMineReducer"
import {mineLimestone} from "../../actions";

test("limeMineReducer.js is defined", ()=>{
    expect(limeMineReducer).toBeDefined();
});

test("limeMineReducer changes current state from null to a different value", ()=>{
    expect(limeMineReducer(null, mineLimestone("limestone"))).toEqual("limestone");
})