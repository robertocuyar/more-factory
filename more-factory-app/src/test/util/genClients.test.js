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

test("genClients will return the given array if the array given has a length of 5.", ()=>{
   const fiveArr = [1, 2, 3, 4, 5];
   const newClients = genClients(fiveArr, 1);
   expect(newClients[0]).toBe(1);
   expect(newClients[4]).toBe(5);
   expect(newClients.length).toBe(5);
});

test("genClients will return an array with a length of 5 client objects if given the default array of [].", ()=>{
   const newClients = genClients(defaultUser.clients , 1);
   const ranIndex = randomizer(0, 4);
  expect(newClients.length).toEqual(5);
  expect(newClients[ranIndex].input[0].content).toBeDefined();
  expect(newClients[ranIndex].input[0].numContent).toBeDefined();
  expect(newClients[ranIndex].input[0].need).toBeDefined();
  expect(newClients[ranIndex].input[0].imgUrl).toBeDefined();
  expect(newClients[ranIndex].pay).toBeDefined();
});

test("genClients will not change any of the previous objects but only add on clients to fulfill the required length of five.",()=>{
   const exampleClients = [{input:[{content: "Iron Ingot", numContent: 0, need: 20}]}];
   const newClients = genClients(exampleClients, 1);
   expect(newClients.length).toEqual(5);
   expect(newClients[0].input[0].content).toEqual("Iron Ingot");
   expect(newClients[0].input[0].need).toEqual(20);
});

test("genClients will generate client's product requests that is less than or equal to the given tier.", ()=>{
   const newClients = genClients([], 2);

   const tierCount = newClients.reduce((accum, client)=>{
      let highTier = 0;
      for(let item of client.input){
         if(item.tier > 2){
            highTier+= 1;
         }
      }
      return accum + highTier;
   }, 0);
   expect(tierCount).toEqual(0);


});