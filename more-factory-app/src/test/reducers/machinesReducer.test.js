import {expect} from "@jest/globals";
import machinesReducer from "../../reducers/machinesReducer";
import {addMachine, machineRender} from "../../actions";
import {defaultBuild, defaultMachine} from "../../reducers/initialStates";

test("machinesReducer.js is defined", ()=>{
    expect(machinesReducer).toBeDefined();
});

test("machinesReducer changes state", ()=>{
    expect(machinesReducer({}, machineRender(defaultMachine))).toEqual(defaultMachine);
});

test("machinesReducer with addMachine will change state to add on the new machine to its set without build property on the newly added machine.",()=>{

   const actualState = machinesReducer(defaultMachine, addMachine(defaultBuild.machines[0]));

   expect(actualState.machines[1].content).toEqual("Copper Furnace");
   expect(actualState.machines[1].build).toBeUndefined();
});