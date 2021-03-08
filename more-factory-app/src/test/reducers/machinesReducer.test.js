import {expect} from "@jest/globals";
import machinesReducer from "../../reducers/machinesReducer";
import {machineRender} from "../../actions";
import {defaultMachine} from "../../reducers/initialStates";

test("machinesReducer.js is defined", ()=>{
    expect(machinesReducer).toBeDefined();
});

test("machinesReducer changes state", ()=>{
    const state = {};
    expect(machinesReducer(state, machineRender(defaultMachine))).toEqual(defaultMachine);
})