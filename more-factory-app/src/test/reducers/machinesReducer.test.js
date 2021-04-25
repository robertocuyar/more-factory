import {expect} from "@jest/globals";
import {machinesReducer} from "../../reducers/machinesReducer";
import {addMachine, machineRender, operateMachine} from "../../actions";
import {defaultBuild, defaultMachine} from "../../reducers/initialStates";

test("machinesReducer.js is defined", () => {
    expect(machinesReducer).toBeDefined();
});

test("machinesReducer changes state", () => {
    expect(machinesReducer({}, machineRender(defaultMachine))).toEqual(defaultMachine);
});

test("machinesReducer with addMachine will change state to add on the new machine to its set without build property on the newly added machine.", () => {

    const actualState = machinesReducer(defaultMachine, addMachine(defaultBuild.machines[0]));

    expect(actualState.machines[1].content).toEqual("Copper Furnace");
    expect(actualState.machines[1].build).toBeUndefined();
});

test("machinesReducer with addMachine will not carry over the amount given for an item in the build array over to the machine's input array with the same content name for the item.", ()=>{
    const testBuild = defaultBuild.machines[3];
    testBuild.build[0].numContent = 40;
    testBuild.build[1].numContent = 20;
    testBuild.build[2].numContent = 10;
    const actualState = machinesReducer(defaultMachine, addMachine(testBuild));
    expect(actualState.machines[1].content).toEqual("Copper Wire Maker");
    expect(actualState.machines[1].input[0].numContent).toEqual(0);
    console.log(actualState.machines[1]);
});

test("machinesReducer with operateMachine will change state to given machines array", () => {
    const actualState = machinesReducer(defaultMachine, operateMachine(defaultMachine, 1000));

    expect(actualState.machines[0].content).toEqual("Iron Furnace");
});