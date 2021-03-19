import {expect} from "@jest/globals";
import React from 'react';
import Adapter from "enzyme-adapter-react-16";
import {shallow, configure} from "enzyme";
import Machine from "../../../components/machines/Machine";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {defaultMachine, defaultBag} from "../../../reducers/initialStates";

test("Machine.js is defined", ()=>{
   expect(Machine).toBeDefined();
});

configure({adapter : new Adapter()});

describe ("Machine", ()=>{
   let wrapper, store;
   const initialState = {slotsInv: defaultBag, machines: defaultMachine};
   const mockStore = configureStore();

   beforeEach(()=>{
      store = mockStore(initialState);
      wrapper = shallow(<Provider store={store} machine={defaultMachine.machines[0]}><Machine/></Provider>);
   });

   it("renders correctly", ()=>{
      wrapper;
   });

});