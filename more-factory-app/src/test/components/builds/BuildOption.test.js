import {expect} from "@jest/globals";
import React from 'react';
import Adapter from "enzyme-adapter-react-16";
import {shallow, configure} from "enzyme";
import BuildOption from "../../../components/builds/BuildOption";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {defaultBuild, defaultBag} from "../../../reducers/initialStates";

test("BuildOption.js is defined", ()=>{
   expect(BuildOption).toBeDefined();
});

configure ({adapter : new Adapter()});

describe("BuildOption", ()=>{
   let wrapper, store;
   const initialState = {slotsInv: defaultBag, buildOpt: defaultBuild};
   const mockStore = configureStore();

   store = mockStore(initialState);
    wrapper = shallow(<Provider store={store} option = {defaultBuild.options[0]}><BuildOption/></Provider>);

    it("renders correctly", ()=>{
       wrapper;
    });
});