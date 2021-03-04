import {expect} from "@jest/globals";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import IronMine from "../../../components/mines/IronMine";
import {shallow, configure} from "enzyme";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

test("IronMine.js is defined.", ()=>{
    expect(IronMine).toBeDefined();
})

configure({adapter: new Adapter()});

describe("IronMine", ()=>{
    let wrapper, store;
    const initialState = {ironMined: null};
    const mockStore = configureStore();

    it("Renders correctly", ()=>{
        store = mockStore(initialState);
        wrapper = shallow(<Provider store={store}><IronMine/></Provider>);
    });
});