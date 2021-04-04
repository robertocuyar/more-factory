import {expect} from "@jest/globals";
import {genClients} from "../../util/genClients";
import {defaultUser} from "../../reducers/initialStates";
import {randomizer} from "../../util/randomizer";

test("genClients.js is defined", ()=>{
   expect(genClients).toBeDefined();
});

test("genClients returns an object", ()=>{
   expect(typeof genClients()).toBe("object");
   expect(Array.isArray(genClients())).toBe(true);
});

test("genClients will return an array with a length of 5 client objects if given the default array of [].", ()=>{
   const newClients = genClients(defaultUser.clients);
   const ranIndex = randomizer(0, 4);
  expect(newClients.length).toEqual(5);
  expect(newClients[ranIndex].input[0].content).toBeDefined();
  expect(newClients[ranIndex].input[0].numContent).toBeDefined();
  expect(newClients[ranIndex].input[0].need).toBeDefined();
  expect(newClients[ranIndex].input[0].imgUrl).toBeDefined();
  expect(newClients[ranIndex].pay).toBeDefined();
});