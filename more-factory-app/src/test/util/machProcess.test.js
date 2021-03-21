import {expect} from "@jest/globals";
import {machProcess} from "../../util/machProcess";
import {defaultMachine} from "../../reducers/initialStates";
import ironFurnace from "../../img/iron_furnace.png";
import iron from "../../img/iron_inv.png";
import coal from "../../img/coal_inv.png";
import ironBar from "../../img/iron_bar.png";

const machContent = 'Iron Furnace';
const machContent2 = 'Bolt Assembler';
const boltAssem =
    {
        content: machContent2,
        description: "Uses 1 IRON INGOT to make 2 IRON BOLTS.",
        imgUrl: "",
        needsPower: false,
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
    expect(machUpdate.isOn).toBe(true);
});

test("machProcess with Iron Furnace won't process an output of Iron Ingot if there is an input of 1 Coal and 0 Iron Ore",()=>{
    machineCur.machines[0].input[0].numContent = 1;
    machineCur.machines[0].input[1].numContent = 0;
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