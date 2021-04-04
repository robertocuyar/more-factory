import {expect} from "@jest/globals";
import React from 'react';
import Adapter from "enzyme-adapter-react-16";
import {configure} from "enzyme";
import {invDisplay} from "../../util/invDisplay";
import {firstIron} from "../../reducers/initialStates";
import MineInventoryContainer from "../../components/mines/MineInventoryContainer";

const testItem = firstIron;

test("invDisplay.js is defined", ()=>{
   expect(invDisplay).toBeDefined();
});

test("invDisplay returns null if given item has a value of 0",()=>{
    testItem.numContent = 0;
    expect(invDisplay(testItem)).toBeNull();
});

configure ({adapter: new Adapter()});

describe("invDisplay", ()=>{

   it("invDisplay returns JSX if given item that has a value that is not 0", ()=>{
       const result = <MineInventoryContainer content="Iron Ore" imgUrl="iron_inv.png" numContent={1} />;
       testItem.numContent = 1;
       expect((invDisplay(testItem))).toEqual(result);
   });
});


