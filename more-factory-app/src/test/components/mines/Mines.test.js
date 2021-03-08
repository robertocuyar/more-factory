import {expect} from "@jest/globals";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Mines from "../../../components/mines/Mines";
import {shallow, configure} from "enzyme";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

test("Mines.js is defined", ()=>{
    expect(Mines).toBeDefined();
});

configure({adapter: new Adapter()});

describe ("Mines", ()=>{
    let wrapper,store;
    const initialState = {coalMined : null};
    const mockStore = configureStore();

    it("Renders correctly", ()=>{
        store = mockStore(initialState);
        wrapper = shallow(<Provider store = {store}><Mines type={"Coal"}/></Provider>);
    });
});