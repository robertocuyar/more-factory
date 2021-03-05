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
    const inventory = invManager(initialItem, defaultBag);

    expect(inventory[0].content).toEqual(initialItem.content);
    expect(inventory[0].imgUrl).toEqual(initialItem.imgUrl);
    expect(inventory[0].numContent).toEqual(20);
});

test("invManager keeps a maximum of 100 units of an item per slot and passes the remaining items to the next empty slot.", ()=>{
   const firstItem = defaultBag.slots[0];
   firstItem.content= "Iron";
   firstItem.numContent = 90;
   firstItem.imgUrl = "";

    const inventory = invManager(initialItem, defaultBag);

    expect(inventory[0].content).toEqual(initialItem.content);
   expect(inventory[0].imgUrl).toEqual(initialItem.imgUrl);
   expect(inventory[0].numContent).toEqual(100);
   expect(inventory[1].content).toEqual(initialItem.content);
   expect(inventory[1].imgUrl).toEqual(initialItem.imgUrl);
   expect(inventory[1].numContent).toEqual(10);
});

test("invManager does not replace an existing item with a different item type but places in a following null slot", ()=>{
    const firstItem = defaultBag.slots[0];
    firstItem.content = "Coal";
    firstItem.numContent = 30;
    firstItem.imgUrl = "";

    const inventory = invManager(initialItem, defaultBag);

    expect(inventory[0].content).toEqual("Coal");
    expect(inventory[1].content).toEqual("Iron");
});

test("invManager updates item numContent in inventory when two different items are present.", ()=>{
    const [firstItem, secondItem] = defaultBag.slots;
    firstItem.content = "Coal";
    firstItem.numContent = 30;
    firstItem.imgUrl = "";

    secondItem.content = "Iron";
    secondItem.numContent = 95;
    secondItem.imgUrl = "";

    const inventory = invManager(initialItem, defaultBag);
    expect(inventory[0].content).toEqual("Coal");
    expect(inventory[1].content).toEqual("Iron");
    expect(inventory[2].content).toEqual("Iron");
    expect(inventory[1].numContent).toEqual(100);
    expect(inventory[2].numContent).toEqual(15);

});

test("Given item will not change values if inventory slots are full or will provide an item with numContent remaining if given identical items are full", ()=>{

    const [firstItem, secondItem, thirdItem, fourthItem, fifthItem, sixthItem, seventhItem, eightItem] = defaultBag.slots;
    firstItem.content= "Limestone";
    firstItem.numContent = 40;
    secondItem.content ="Coal";
    secondItem.numContent = 55;
    thirdItem.content = "Limestone";
    thirdItem.numContent = 23;
    fourthItem.content = "Sulfur"
    fourthItem.numContent = 77;
    fifthItem.content = "Iron Plate";
    fifthItem.numContent = 90;
    sixthItem.content = "Copper Sheet";
    sixthItem.numContent = 88;
    seventhItem.content = "Concrete";
    seventhItem.numContent = 33;
    eightItem.content = "Iron";
    eightItem.numContent = 95;

    const testItem = {
        content: "Copper",
        numContent: 20,
        imgUrl: ""
    };

    invManager(testItem, defaultBag);
    expect(testItem.content).toEqual("Copper");
    expect(testItem.numContent).toEqual(20);
    expect(testItem.imgUrl).toEqual ("");

    invManager(initialItem, defaultBag);
    expect(initialItem.content).toEqual("Iron");
    expect(initialItem.numContent).toEqual(15);
    expect(initialItem.imgUrl).toEqual(iron);

});

