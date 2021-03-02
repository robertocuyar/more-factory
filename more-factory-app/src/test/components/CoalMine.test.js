import {expect} from "@jest/globals";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import CoalMine from "../../components/CoalMine";
import {shallow, configure} from "enzyme";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

test("CoalMine.js is defined", ()=>{
    expect(CoalMine).toBeDefined();
});

configure({adapter: new Adapter()});

describe ("CoalMine", ()=>{
    let wrapper,store;
    const initialState = {coalMined : null};
    const mockStore = configureStore();

    it("Renders correctly", ()=>{
        store = mockStore(initialState);
        wrapper = shallow(<Provider store = {store}><CoalMine/></Provider>);
    });
});