import {expect} from "@jest/globals";
import invManager from "../../methods/invManager";
import iron from "../../img/iron_inv.png";
import {defaultBag} from "../../reducers/initialStates";


const initialItem = {
    content: "Iron",
    numContent: 20,
    imgUrl: iron
};



test("invManager.js is defined", ()=>{
    expect(invManager).toBeDefined();
});

test("invManager returns a new inventory array, after taking in the default array (defaultBag), to include the initialItem as the first index.", ()=>{
    expect(invManager(initialItem, defaultBag)[0].content).toEqual(initialItem.content);
    console.log(invManager(initialItem, defaultBag));
    expect(invManager(initialItem, defaultBag)[0].imgUrl).toEqual(initialItem.imgUrl);
    expect(invManager(initialItem, defaultBag)[0].numContent).toEqual(20);
});

test("invManager keeps a maximum of 100 units of an item per slot and passes the remaining items to the next empty slot.", ()=>{
   const firstItem = defaultBag.slots[0];
   firstItem.content= "Iron";
   firstItem.numContent = 90;
   firstItem.imgUrl = "";

   expect(invManager(initialItem, defaultBag)[0].content).toEqual(initialItem.content);
   expect(invManager(initialItem, defaultBag)[0].imgUrl).toEqual(initialItem.imgUrl);
   expect(invManager(initialItem, defaultBag)[0].numContent).toEqual(100);
   expect(invManager(initialItem, defaultBag)[1].content).toEqual(initialItem.content);
   expect(invManager(initialItem, defaultBag)[1].imgUrl).toEqual(initialItem.imgUrl);
   expect(invManager(initialItem, defaultBag)[1].numContent).toEqual(10);
});

test("invManager does not replace an existing item with a different item type but places in a following null slot", ()=>{
    const firstItem = defaultBag.slots[0];
    firstItem.content = "Coal";
    firstItem.numContent = 30;
    firstItem.imgUrl = "";

    expect(invManager(initialItem, defaultBag)[0].content).toEqual("Coal");
    expect(invManager(initialItem, defaultBag)[1].content).toEqual("Iron");
});

test("invManager updates item numContent in inventory when two different items are present.", ()=>{
    const [firstItem, secondItem] = defaultBag.slots;
    firstItem.content = "Coal";
    firstItem.numContent = 30;
    firstItem.imgUrl = "";

    secondItem.content = "Iron";
    secondItem.numContent = 95;
    secondItem.imgUrl = "";

    expect(invManager(initialItem, defaultBag)[0].content).toEqual("Coal");
    expect(invManager(initialItem, defaultBag)[1].content).toEqual("Iron");
    expect(invManager(initialItem, defaultBag)[2].content).toEqual("Iron");
    expect(invManager(initialItem, defaultBag)[1].numContent).toEqual(100);
    expect(invManager(initialItem, defaultBag)[2].numContent).toEqual(15);

});

