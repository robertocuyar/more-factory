import {expect} from "@jest/globals";
import {ironMineReducer} from "../../reducers/ironMineReducer";
import {mineIron} from "../../actions";

test("ironMineReducer.js is defined", () => {
    expect(ironMineReducer).toBeDefined();
});

test("ironMineReducer changes current state from null to a different value", () => {
    expect(ironMineReducer(null, mineIron("iron"))).toEqual("iron");
});