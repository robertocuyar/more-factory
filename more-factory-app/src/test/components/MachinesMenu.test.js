import {expect} from "@jest/globals";
import React from 'react';
import MachinesMenu from "../../components/MachinesMenu";
import Adapter from "enzyme-adapter-react-16";
import {configure} from "enzyme";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

test("MachinesMenu.js is defined", ()=>{
    expect(MachinesMenu).toBeDefined();
});

configure ({adapter: new Adapter()});

describe("Machines", ()=>{
    let wrapper, store;
    const initialState = {}
})