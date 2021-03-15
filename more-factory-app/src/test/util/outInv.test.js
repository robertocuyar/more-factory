import {expect} from "@jest/globals";
import {outInv} from "../../util/outInv";
import {defaultBag} from "../../reducers/initialStates";
import {defaultMachine} from "../../reducers/initialStates";
import ironFurnace from "../../img/iron_furnace.png";
import iron from "../../img/iron_inv.png";
import coal from "../../img/coal_inv.png";
import ironBar from "../../img/iron_bar.png";

const testItem = {
    content: "Coal",
    numContent: 5,
    imgUrl: ""
}


const testInput = defaultMachine.machines[0].input[1];
const testMachContent = defaultMachine.machines[0].content;
const testSlots = defaultBag.slots;
let invMachineResult;


test("outInv.js is defined", ()=>{
   expect(outInv).toBeDefined();
});

test("outInv returns inventory and machines that is not changed if requested item is not present in inventory",()=>{
   expect(outInv(testInput, testMachContent, defaultBag, defaultMachine).inventory.slots[0].content).toBe(null);
   expect(outInv(testInput, testMachContent, defaultBag, defaultMachine).machine.machines[0].input[1].numContent).toBe(0);

});

test("outInv returns an object with an inventory and machine property.", ()=>{
    invMachineResult = outInv(testInput, testMachContent ,defaultBag, defaultMachine);
    expect(invMachineResult.inventory).toBeDefined();
    expect(invMachineResult.machine).toBeDefined();
});

test("outInv returns inventory and machine that is not changed if requested item in input slot is already full.", ()=>{
   testInput.numContent = 80;
   invMachineResult = outInv(testInput, testMachContent,defaultBag, defaultMachine);
   expect(invMachineResult.inventory.slots[0].content).toBe(defaultBag.slots[0].content);
   expect(invMachineResult.machine.machines[0].input[1].content).toBe("Coal");
   expect(invMachineResult.machine.machines[0].input[1].numContent).toBe(80);
});

test("outInv returns coal in inventory item reduced down to fill up input slot up to 80.", ()=>{

   testInput.numContent = 75;
   testSlots[0].content = "Coal";
   testSlots[0].numContent = 12;
   testSlots[0].imgUrl = coal;
    invMachineResult = outInv(testInput, testMachContent, defaultBag, defaultMachine);

    expect(invMachineResult.inventory.slots[0].content).toBe("Coal");
    expect(invMachineResult.inventory.slots[0].numContent).toBe(7);
    expect(invMachineResult.machine.machines[0].input[1].content).toBe("Coal");
    expect(invMachineResult.machine.machines[0].input[1].numContent).toBe(80);

});