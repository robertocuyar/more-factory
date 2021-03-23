import {expect} from "@jest/globals";
import React from 'react';
import MachinesMenu from "../../components/MachinesMenu";
import Adapter from "enzyme-adapter-react-16";
import {configure, shallow} from "enzyme";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {defaultMachine} from "../../reducers/initialStates";

test("MachinesMenu.js is defined", ()=>{
    expect(MachinesMenu).toBeDefined();
});

configure ({adapter: new Adapter()});

describe("MachinesMenu", ()=>{
    let wrapper, store;
    const initialState = {machines: defaultMachine};
    const mockStore = configureStore();

    it("Renders correctly", ()=>{
        store = mockStore(initialState);
        wrapper = shallow(<Provider store = {store}><MachinesMenu/></Provider>);
    });
});