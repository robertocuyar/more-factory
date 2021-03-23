import {expect} from "@jest/globals";
import React from 'react';
import {invDisplay} from "../../util/invDisplay";
import {firstIron} from "../../reducers/initialStates";
import MineInventoryContainer from "../../components/mines/MineInventoryContainer";

const testItem = firstIron;

test("invDisplay.js is defined", ()=>{
    console.log(invDisplay(firstIron))
   expect(invDisplay).toBeDefined();
});

test("invDisplay returns null if given item has a value of 0",()=>{
    testItem.numContent = 0;
    expect(invDisplay(testItem)).toBeNull();
});

test("invDisplay returns JSX if given item that has a value that is not 0",()=>{
    expect(invDisplay(testItem)).toBeDefined();
});

