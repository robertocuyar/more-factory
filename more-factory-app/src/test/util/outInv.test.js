import {expect} from "@jest/globals";
import {outInv} from "../../util/outInv";
import {defaultBag} from "../../reducers/initialStates";
import {defaultMachine} from "../../reducers/initialStates";
import coal from "../../img/coal_inv.png";

const testInput = defaultMachine.machines[0].input[1];
const testMachContent = defaultMachine.machines[0].content;
const testSlots = defaultBag.slots;
let invMachineResult;

test("outInv.js is defined", ()=>{
   expect(outInv).toBeDefined();
});

test("outInv returns inventory and machines that is not changed if requested item is not present in inventory",()=>{
   expect(outInv(testInput, testMachContent, defaultBag, defaultMachine, 80).inventory.slots[0].content).toBe(null);
   expect(outInv(testInput, testMachContent, defaultBag, defaultMachine, 80).machine.machines[0].input[1].numContent).toBe(0);
});

test("outInv returns an object with an inventory and machine property.", ()=>{
    invMachineResult = outInv(testInput, testMachContent ,defaultBag, defaultMachine, 80);
    expect(invMachineResult.inventory).toBeDefined();
    expect(invMachineResult.machine).toBeDefined();
});

test("outInv returns inventory and machine that is not changed if requested item in input slot is already full.", ()=>{
   testInput.numContent = 80;
   invMachineResult = outInv(testInput, testMachContent,defaultBag, defaultMachine, 80);
   expect(invMachineResult.inventory.slots[0].content).toBe(defaultBag.slots[0].content);
   expect(invMachineResult.machine.machines[0].input[1].content).toBe("Coal");
   expect(invMachineResult.machine.machines[0].input[1].numContent).toBe(80);
});

test("outInv returns coal in inventory item reduced down to fill up input slot up to 80.", ()=>{

   testInput.numContent = 75;
   testSlots[0].content = "Coal";
   testSlots[0].numContent = 12;
   testSlots[0].imgUrl = coal;
    invMachineResult = outInv(testInput, testMachContent, defaultBag, defaultMachine, 80);

    expect(invMachineResult.inventory.slots[0].content).toBe("Coal");
    expect(invMachineResult.inventory.slots[0].numContent).toBe(7);
    expect(invMachineResult.machine.machines[0].input[1].content).toBe("Coal");
    expect(invMachineResult.machine.machines[0].input[1].numContent).toBe(80);
});

test("outInv returns empty slot when all of the item that is left in inventory slot is taken up by input", ()=>{

   testSlots[0].content = "Coal";
   testSlots[0].numContent = 20;
   testSlots[0].imgUrl = "";
   invMachineResult = outInv(testInput, testMachContent, defaultBag, defaultMachine, 80);

   expect(invMachineResult.inventory.slots[0].content).toBe(null);
   expect(invMachineResult.inventory.slots[0].numContent).toBe(null);
   expect(invMachineResult.machine.machines[0].input[1].content).toBe("Coal");
   expect(invMachineResult.machine.machines[0].input[1].numContent).toBe(20);
});

test("outInv does not take away any more coal from the given inventory if the input slot is currently full.", ()=>{

   testSlots[0].content = "Coal";
   testSlots[0].numContent = 80;
   testSlots[0].imgUrl = "";
   testSlots[1].content = "Iron";
   testSlots[1].numContent = 25;
   testSlots[1].imgUrl = "";
   testSlots[2].content = "Coal";
   testSlots[2].numContent = 25;
   testSlots[2].imgUrl = "";
   invMachineResult = outInv(testInput, testMachContent, defaultBag, defaultMachine, 80);

   expect(invMachineResult.inventory.slots[0].content).toBe(null);
   expect(invMachineResult.inventory.slots[0].numContent).toBe(null);
   expect(invMachineResult.inventory.slots[1].content).toBe("Iron");
   expect(invMachineResult.inventory.slots[1].numContent).toBe(25);
   expect(invMachineResult.inventory.slots[2].content).toBe("Coal");
   expect(invMachineResult.inventory.slots[2].numContent).toBe(25);
   expect(invMachineResult.machine.machines[0].input[1].content).toBe("Coal");
   expect(invMachineResult.machine.machines[0].input[1].numContent).toBe(80);
});