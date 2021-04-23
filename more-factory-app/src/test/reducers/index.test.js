import {expect} from "@jest/globals";
import index from "../../reducers/index";
import {createStore} from "redux";
import {defaultBag, defaultMachine, defaultBuild} from "../../reducers/initialStates";
import {defaultUser} from "../../data/defaultUser";

test("Reducer Index is defined", ()=>{
    expect(index).toBeDefined();
});

test("Reducer Index contains all reducers in app", ()=>{
    let storeTest = createStore(index).getState();

    expect(storeTest.slotsInv).toEqual(defaultBag);
    expect(storeTest.coalMined).toEqual(null);
    expect(storeTest.ironMined).toEqual(null);
    expect(storeTest.copperMined).toEqual(null);
    expect(storeTest.limeMined).toEqual(null);
    expect(storeTest.machines).toEqual(defaultMachine);
    expect(storeTest.buildOpt).toEqual(defaultBuild);
    expect(storeTest.userStats).toEqual(defaultUser);
});





