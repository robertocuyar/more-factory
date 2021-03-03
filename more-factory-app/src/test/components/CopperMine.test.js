import {expect} from "@jest/globals"
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import {shallow, configure} from "enzyme";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import CopperMine from "../../components/CopperMine";

test("CopperMine.js is defined", ()=>{
    expect(CopperMine).toBeDefined();
});

configure({adapter: new Adapter()});

describe("CopperMine", ()=>{
    let wrapper, store;
    const initialState = {copperMined: null};
    const mockStore = configureStore();

    it("Renders correctly", ()=>{
        store = mockStore(initialState);
        wrapper = shallow(<Provider store={store}><CopperMine/></Provider>);
    });
});