import {expect} from "@jest/globals";
import {userStatReducer} from "../../reducers/userStatReducer";
import {defaultUser} from "../../reducers/initialStates";
import {changeClients, moneyAdd, moneyTake, statRender, upgradeTier} from "../../actions";


test("userStatReducer.js is defined", ()=>{
   expect(userStatReducer).toBeDefined();
});

test("userStatReducer changes state", ()=>{
   expect(userStatReducer({}, statRender(defaultUser))).toEqual(defaultUser);
});

test("userStatReducer changes state of the tier with upgradeTier", ()=>{
   expect(userStatReducer(defaultUser, upgradeTier()).tier).toEqual(2);
});

test("userStatReducer changes state of currency by addition with moneyAdd", ()=>{
   expect(userStatReducer(defaultUser, moneyAdd(500)).currency).toEqual(500);
});

test("userStatReducer changes state of currency by subtraction with moneySubtract", ()=>{
   defaultUser.currency = 1000;
   expect(userStatReducer(defaultUser, moneyTake(500)).currency).toEqual(500);
});

test("userStatReducer changes state of clients with changeClients", ()=>{
   const newClients = [{content: "Iron Ingot", need: 50, numContent: 0}, {}, {}, {},{}];
   const newState = userStatReducer(defaultUser, changeClients(newClients)).clients[0];
   expect(newState.content).toEqual("Iron Ingot");
   expect(newState.need).toEqual(50);
   expect(newState.numContent).toEqual(0);
})