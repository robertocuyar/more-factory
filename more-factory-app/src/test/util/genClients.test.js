import {expect} from "@jest/globals";
import {genClients} from "../../util/genClients";

test("genClients.js is defined", ()=>{
   expect(genClients).toBeDefined();
});

test("genClients returns an object", ()=>{
   expect(typeof genClients()).toBe("object");
   expect(Array.isArray(genClients())).toBe(true);
});

// test("genClients will return a clients property array with a length of 5 if given an array that is less than 5.", ()=>{
//
// });