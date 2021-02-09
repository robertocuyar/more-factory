import {expect} from "@jest/globals";

const index = require("../../reducers/index");

test("Reducer Index is defined", ()=>{
    expect(index).toBeDefined();
})