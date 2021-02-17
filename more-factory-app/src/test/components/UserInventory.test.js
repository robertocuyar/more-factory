import {expect} from "@jest/globals";
import React from 'react';
import Adapter from "enzyme-adapter-react-16";
import {shallow, configure, mount} from "enzyme";
import {Provider} from "react-redux";
import UserInventory from "../../components/UserInventory";
import InventoryItem from "../../components/InventoryItem";
import configureStore from 'redux-mock-store';

test("UserInventory.js is defined", ()=>{
    expect(UserInventory).toBeDefined();
});

configure({ adapter: new Adapter()});

describe ("UserInventory", ()=>{

    let wrapper, store, mountWrapper;
    const initialState = {slots: 8};
   const mockStore = configureStore();

   beforeEach(()=>{
       store = mockStore(initialState);
       wrapper = shallow( <Provider store={store}><UserInventory/></Provider>);
       mountWrapper = shallow(<UserInventory/>);
   })
    it("Renders correctly", ()=>{
        wrapper;
        console.log(wrapper.debug());
    })

    it("Contains UserInventory component", ()=>{
    expect(wrapper.find(UserInventory).length).toEqual(1);
    });

   // it("Default render of 8 InventoryItem components", ()=>{
   //      expect(mountWrapper.find(".inventory-box").length).toEqual(8);
   // });

})