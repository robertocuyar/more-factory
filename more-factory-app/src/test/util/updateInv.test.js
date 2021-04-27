import {expect} from "@jest/globals";
import {updateInv} from "../../util/updateInv";
import {defaultBag} from "../../reducers/initialStates";

const inventoryTest = JSON.parse(JSON.stringify(defaultBag));
inventoryTest.slots[0] = {
    id: 1,
    content: "Copper Wire",
    numContent: 5,
    imgUrl: ""
}

test("updateInv.js is defined", () => {
expect(updateInv).toBeDefined();
});

test("updateInv returns an object", ()=>{
   expect(typeof updateInv(inventoryTest, 5)).toEqual("object");
});

test("updateInv will return slots array that is increased by 5 in length and still include the previous slot data from the default inventory slots", ()=>{
   const newSlots = updateInv(inventoryTest, 5);
   expect(newSlots.slots.length).toEqual(13);
   expect(newSlots.slots[0].id).toEqual(1);
   expect(newSlots.slots[0].numContent).toEqual(5);
   expect(newSlots.slots[0].content).toEqual("Copper Wire");
   expect(newSlots.slots[8].id).toEqual(9);
   expect(newSlots.slots[8].content).toEqual(null);
   expect(newSlots.slots[9].id).toEqual(10)
});