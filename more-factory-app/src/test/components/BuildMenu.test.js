import {expect} from "@jest/globals";
import React from "react";
import BuildMenu from "../../components/BuildMenu";
import Adapter from "enzyme-adapter-react-16";
import {configure, shallow} from "enzyme";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import defaultBuild from "../../reducers/initialStates";

test("BuildMenu.js is defined", ()=>{
    expect(BuildMenu).toBeDefined();
});

configure({adapter: new Adapter()});

describe("BuildMenu",()=>{
   let wrapper, store;
   const initialState = {buildOpt : defaultBuild};
   const mockStore = configureStore();

   it("Renders correctly",()=>{
       store = mockStore(initialState);
       wrapper = shallow(<Provider store={store}><BuildMenu/></Provider>);
   });
});