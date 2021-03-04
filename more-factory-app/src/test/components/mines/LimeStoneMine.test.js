import {expect} from "@jest/globals";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import {shallow, configure} from "enzyme";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import LimeStoneMine from "../../../components/mines/LimeStoneMine";

test("LimeStoneMine.js is defined", ()=>{
    expect(LimeStoneMine).toBeDefined();
});

configure({adapter : new Adapter()});

describe("LimeStoneMine", ()=>{
    let wrapper, store;
    const initialState = {limeMined: null};
    const mockStore = configureStore();

    it("Renders correctly", ()=>{
        store = mockStore(initialState);
        wrapper = shallow(<Provider store={store}><LimeStoneMine/></Provider>)
    });
});

