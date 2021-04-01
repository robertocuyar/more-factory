import {expect} from "@jest/globals";
import {machProcess} from "../../util/machProcess";
import {defaultMachine} from "../../reducers/initialStates";

const machContent = 'Iron Furnace';
const machContent2 = 'Bolt Assembler';
const boltAssem =
    {
        content: machContent2,
        description: "Uses 1 IRON INGOT to make 2 IRON BOLTS.",
        imgUrl: "",
        needsPower: true,
        consume: 10,
        isOn: false,
        process: 1500,
        input: [
            {
                numContent: 0,
                content: "Iron Ingot",
                imgUrl: "",
                use: 1
            }
        ],
        output: [
            {
                numContent: 0,
                content: "Iron Bolt",
                imgUrl: "",
                give: 2
            }
        ]
    };
 defaultMachine.machines[1] = boltAssem;
const machineCur = defaultMachine;
const machInput = defaultMachine.machines[0].input;
const machOutput = defaultMachine.machines[0].output;
machineCur.machines[0].isOn = true;
const coalGen = {
    content: "Coal Generator",
        needsPower: false,
    description: "Burns coal to generate 50 MW of power",
    isOn: true,
    process: 1000,
    imgUrl: "",
    input: [
    {
        content: "Coal",
        numContent: 5,
        imgUrl: "",
        use: 1
    }
],
    output: [
    {
        content: "Current Power Production",
        numContent: 50,
        give: 50
    }
]
}

const machContent3 = coalGen.content;

test("machProcess.js is defined", ()=>{
   expect(machProcess).toBeDefined();
});

test("machProcess returns an object type.", ()=>{
   expect(typeof machProcess(machContent, machInput, machOutput, machineCur)).toBe("object");
});

test("machProcess with Iron Furnace takes away 1 coal and 1 iron input and returns 1 iron ingot output within the new machines object state",()=>{
    machineCur.machines[0].input[0].numContent = 5;
    machineCur.machines[0].input[1].numContent = 7;
    const machUpdate = machProcess(machContent, machInput, machOutput, machineCur).machines[0];

    expect(machUpdate.input[0].numContent).toBe(4);
    expect(machUpdate.input[1].numContent).toBe(6);
    expect(machUpdate.output[0].numContent).toBe(1);
});

test("machProcess with Iron Furnace won't process an output of Iron Ingot if there is an input of 1 Coal and 0 Iron Ore",()=>{
    machineCur.machines[0].input[0].numContent = 1;
    machineCur.machines[0].input[1].numContent = 0;
    machineCur.machines[0].isOn = true;
    const machUpdate = machProcess(machContent,machInput, machOutput, machineCur).machines[0];

    expect(machUpdate.input[0].numContent).toBe(1);
    expect(machUpdate.input[1].numContent).toBe(0);
    expect(machUpdate.output[0].numContent).toBe(0);
    expect(machUpdate.isOn).toBe(false);
});

test("machProcess with Iron Furnace won't process input items if output slot is full with 80 iron ingot.",()=>{
   machineCur.machines[0].input[0].numContent = 12;
   machineCur.machines[0].input[1].numContent = 10;
   machineCur.machines[0].output[0].numContent = 80;
   const machUpdate = machProcess(machContent, machInput, machOutput, machineCur).machines[0];

   expect(machUpdate.input[0].numContent).toBe(12);
   expect(machUpdate.input[1].numContent).toBe(10);
   expect(machUpdate.output[0].numContent).toBe(80);
   expect(machUpdate.isOn).toBe(false);
});

test("machProcess with Coal Generator with numContent of 50 MW won't add on any extra MW.",()=>{
    defaultMachine.machines[1] = coalGen;
    const machUpdate = machProcess(machContent3, coalGen.input, coalGen.output, machineCur).machines[1];
    expect(machUpdate.output[0].numContent).toBe(50);
});

test("machProcess returns unchanged power state if machines don't use power.", ()=>{
    machineCur.power = {current: 150, capacity: 500};
    const machUpdate = machProcess(machContent, machInput, machOutput, machineCur);
    expect(machUpdate.power.current).toBe(150);
});

test("machProcess returns increased power state if generator adds power to the grid.",()=>{
    defaultMachine.machines[1] = coalGen;
    machineCur.power = {current: 200, capacity: 500};
    const machUpdate = machProcess(machContent3, coalGen.input, coalGen.output, machineCur);
    expect(machUpdate.power.current).toEqual(250);
});

test("machProcess returns a full power state based on capacity after an attempt to add more power to the grid.", ()=>{
    defaultMachine.machines[1] = coalGen;
    defaultMachine.power = {current: 490, capacity: 500};
    const machUpdate = machProcess(machContent3, coalGen.input, coalGen.output, machineCur);
    expect(machUpdate.power.current).toEqual(500);
});

test("machProcess returns decreased power state if machine uses power to process", ()=>{
    machineCur.machines[1].input[0].numContent = 6;
    defaultMachine.power = {current: 250, capacity: 500};
    const machUpdate = machProcess(machContent2, machineCur.machines[1].input, machineCur.machines[1].output, machineCur);
    expect(machUpdate.power.current).toEqual(240);
});

test("machProcess returns unchanged power state and unchanged input and output for a machine if there wasn't enough power to allow the machine to process", ()=>{
    machineCur.machines[1].input[0].numContent = 10;
    defaultMachine.power = {current: 5, capacity: 500};
    const machUpdate = machProcess(machContent2, machineCur.machines[1].input, machineCur.machines[1].output, machineCur);
    expect(machUpdate.power.current).toEqual(5);
    expect(machUpdate.machines[1].input[0].numContent).toEqual(10);
});