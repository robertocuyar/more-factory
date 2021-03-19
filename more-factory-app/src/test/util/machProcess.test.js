import {expect} from "@jest/globals";
import {machProcess} from "../../util/machProcess";
import {defaultMachine} from "../../reducers/initialStates";

const machContent = 'Iron Furnace';
const machineCur = defaultMachine;

test("machProcess.js is defined", ()=>{
   expect(machProcess).toBeDefined();
});

test("machProcess returns an object type.", ()=>{
   expect(typeof machProcess()).toBe("object");
});

test("machProcess with Iron Furnace takes away 1 coal and 1 iron input and returns 1 iron ingot output within the new machines object state",()=>{
    machineCur.machines[0].input[0].numContent = 5;
    machineCur.machines[0].input[1].numContent = 7;
    const machUpdate = machProcess(machContent, machineCur).machines[0];

    expect(machUpdate.input[0].numContent).toBe(4);
    expect(machUpdate.input[1].numContent).toBe(6);
    expect(machUpdate.output[0].numContent).toBe(1);
});

