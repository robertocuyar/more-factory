import {expect} from "@jest/globals";
import invManager from "../../methods/invManager";
import iron from "../../img/iron_inv.png";
import {defaultBag} from "../../reducers/initialStates";


const initialItem = {
    content: "Iron",
    numContent: 20,
    imgUrl: iron
}

test("invManager.js is defined", ()=>{
    expect(invManager).toBeDefined();
});

test("invManager returns a new inventory array, after taking in the default array (defaultBag), to include the initialItem as the first index.", ()=>{
    expect(invManager(initialItem, defaultBag).slots[0].content).toEqual(initialItem.content);
    expect(invManager(initialItem, defaultBag).slots[0].imgUrl).toEqual(initialItem.imgUrl);
    expect(invManager(initialItem, defaultBag).slots[0].numContent).toEqual(initialItem.numContent);
});