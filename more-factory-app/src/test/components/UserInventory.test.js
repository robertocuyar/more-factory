import {expect} from "@jest/globals";
import React from 'react';
import Adapter from "enzyme-adapter-react-16";
import {shallow, configure, mount} from "enzyme";
import {Provider} from "react-redux";
import UserInventory from "../../components/UserInventory";
import configureStore from 'redux-mock-store';
import {defaultBag} from "../../reducers/initialStates";

test("UserInventory.js is defined", ()=>{
    expect(UserInventory).toBeDefined();
});

configure({ adapter: new Adapter()});

describe ("UserInventory", ()=>{

    let wrapper, store;
    const initialState = {slots: defaultBag.slots};
   const mockStore = configureStore();

   beforeEach(()=>{
       store = mockStore(initialState);
       wrapper = shallow( <Provider store={store}><UserInventory/></Provider>);
   })
    it("Renders correctly", ()=>{
        wrapper;
    })

    it("Contains UserInventory component", ()=>{
    expect(wrapper.find(UserInventory).length).toEqual(1);
    });

   // it("Default render of 8 InventoryItem components", ()=>{
   //      expect(mountWrapper.find(".inventory-box").length).toEqual(8);
   // });

})